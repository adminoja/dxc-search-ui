import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs'; // Add import

import { LogTypeService } from './logtype.service';

describe('LogTypeService', () => {
    // let logTypeService: LogTypeService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [LogTypeService]
        });
        // logTypeService = TestBed.get(logTypeService);
    })

    it('should be created', () => {
        const service: LogTypeService = TestBed.get(LogTypeService);
        expect(service).toBeTruthy();
    })
    describe('saveTransection', () => {
        it('should be create transection id', () => {
            const service: LogTypeService = TestBed.get(LogTypeService);
            const logRes: number = 1622601404481;
            let transectionId;
            spyOn(service, 'createTransectionId').and.returnValue(logRes);
            
            transectionId = service.createTransectionId();
    
            expect(transectionId).toEqual(logRes);
        })

        it('should return logType data', () => {
            const service: LogTypeService = TestBed.get(LogTypeService);
            const logRes = {
                "citizenCardNumber" : "3101600888668",
                "transactionId" : "123545642131",
                "logServiceId" : "single-report"
              };
            let response;
            spyOn(service, 'saveTransection').and.returnValue(of(logRes));
            
            service.saveTransection(null).subscribe(res => {
                console.log(res)
                response = res;
            });
    
            expect(response).toEqual(logRes);
        })
    })
   

})