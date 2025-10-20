import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'dataset'
})

export class DatasetPipe implements PipeTransform{
    transform(value: any) {
        // console.log(value)
        let result = [];
        let datasets = []
        let source = Object.keys(environment.qm.sub[0]);
        let dataSchema = [];
        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            let dataset = element.replace(/\./g,'-')
            datasets.push(dataset, "moe-moi-moe-students", "moe-moi-moe-graduates");
                
        }
        console.log(datasets)
        for (const entry of source) {
            let sub = Object.keys(environment.qm.sub[0][entry].sub[0]);
            for (const entry_sub of sub) {
                const schema = environment.qm.sub[0][entry].sub[0][entry_sub].schema;
                dataSchema.push(schema);
                if(datasets.includes(schema)) {
                    result.push({schema: schema, allowValue: 'on'})
                } else {
                    result.push({schema: schema, allowValue: 'off'})
                }
                
            }
        }
        // result = [
        //     {schema: 'dop-probationee', allowValue: 'on'},
        //     {schema: 'dop-probationer-narcotics', allowValue: 'on'},
        //     {schema: 'dop-fact-finding-report', allowValue: 'on'},
        //     {schema: 'doc-prisoner', allowValue: 'on'},
        //     {schema: 'doc-reg-seize', allowValue: 'on'},
        //     {schema: 'doc-prisoner-no-just', allowValue: 'on'},
        //     {schema: 'doc-prisoner-bankrupt', allowValue: 'on'},
        //     {schema: 'doc-absolute-prisoner-information-before-release-on-probation', allowValue: 'on'},
        // ]
        let original = ['doc-prisoner','doc-prisoner-no-just','dop-probationee','djop-juvenile-offender'] //บุคคลพ้นโทษ
        // let prisonerbankrupt = ['doc-prisoner','led-bankruptcy-case'] //ผู้ต้องขัง (บุคคลล้มละลาย)
        let allowValue = []
        // let prisonerbankruptAllowValue = []
        for (let i = 0; i < original.length; i++) {
            for (let j = 0; j < datasets.length; j++) {
                const element = datasets[j]
                if(original[i] == datasets[j]) {
                    allowValue.push(element[0])
                }
            }
        }

        // for (let i = 0; i < prisonerbankrupt.length; i++) {
        //     for (let j = 0; j < datasets.length; j++) {
        //         const element = datasets[j]
        //         console.log(element)
        //         if(prisonerbankrupt[i] == datasets[j]) {
        //             prisonerbankruptAllowValue.push(element[0])
        //         }
        //     }
        // }

        
        // console.log(prisonerbankruptAllowValue)

        let myArray =[]
        let myArray2 =[]
        for (let index = 0; index < allowValue.length; index++) {
            const element = allowValue[index];
            myArray.push(element)
        }
        // for (let index = 0; index < prisonerbankruptAllowValue.length; index++) {
        //     const element = prisonerbankruptAllowValue[index];
        //     myArray2.push(element)
        // }
        // console.log(datasets)
        if (myArray.length < 4) {
            result.filter(someobject  => someobject.schema == 'idb-released-offender')
            .forEach(someobject  => someobject.allowValue = 'off')
        } else if(myArray.length == 4) {
            result.filter(someobject  => someobject.schema == 'idb-released-offender')
            .forEach(someobject  => someobject.allowValue = 'on')
        }
        // console.log(datasets)
        // if (myArray2.length < 2) {
        //     result.filter(someobject  => someobject.schema == 'doc-prisoner-bankrupt')
        //     .forEach(someobject  => someobject.allowValue = 'off')
        // } else if(myArray2.length == 2) {
        //     result.filter(someobject  => someobject.schema == 'doc-prisoner-bankrupt')
        //     .forEach(someobject  => someobject.allowValue = 'on')
        // }
        
        return result;
        
    }

}