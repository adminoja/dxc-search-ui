export const environment = {
  menu: [
    {
      icon: 'mdi mdi-file-document-box-search  mdi-24px',
      title: 'Single Report',
      url: '/secured/v2/index.html#/dxcui0014/dxcui00141/รายงาน Single Report'
    },
    {
      icon: 'mdi mdi-database-refresh  mdi-24px',
      title: 'Local Search',
      url: '/secured/v2/index.html#/localsearch'
    },
    {
      icon: 'mdi mdi-equalizer  mdi-24px',
      title: 'ระบบรายสถิติ',
      url: 'https://bi.dxc.go.th/#/signin'
    },
    {
      icon: 'mdi mdi-power  mdi-24px',
      title: 'ออกจากระบบ',
      url: 'https://search.dxc.go.th/sso/sign-out?redirect_uri=https://search.dxc.go.th/secured/v2/index.html#/'
    }
  ],
  news: [
    {
      id: 1,
      version: 'Version 2.2.15 released',
      details: `1.ปรับแก้ไขให้ระบบ Single Report แจ้งข้อความกรณีเกิดความผิดพลาดของทะเบียนราษฎร
      2.ถอดการค้นหาข้อมูลจากกรมคุ้มครองสิทธิฯ ออกจาก Single Report เฉพาะการค้นด้วยเลขประจำตัวประชาชน (ชั่วคราวเพื่อปรับปรุงระบบ)
      3.แก้ไขปัญหาใน Single Report กรณีที่เมื่อ session ของ smart card หลุดแล้วจะค้นข้อมูลไม่พบถึงแม้จะ authen ใหม่แล้ว`,
      d_update: ''
    }
  ],
  download: [
    {
      icon: 'assets/dist/img/ami.png',
      filename: 'GovAMI DXC Client',
      url: 'https://dev.egov.go.th/upload/ami/client/GovAMI_DXC_Client.exe'
      // url: 'https://dxc.go.th/wp-content/uploads/2020/govami/govami_dxc_63.exe'
    }
  ],
  manual: [
    {
      icon: 'assets/dist/img/pdf_2.png',
      filename: 'นโยบายความมั่งคงปลอดภัยระบบ DXC สำหรับผู้ใช้',
      url: 'https://ww2.dxc.go.th/docs/files/public/contentmanagement/acceptable_use_policy.pdf'
    },
    {
      icon: 'assets/dist/img/pdf_2.png',
      filename: 'การใช้งานฐานข้อมูลทะเบียนราษฎร',
      url: 'assets/filePDF/FAQs_Dopa.pdf'
    },
    {
      icon: 'assets/dist/img/pdf_2.png',
      filename: 'คู่มือการใข้งานระบบ Search V2',
      url: 'assets/filePDF/คู่มือการใช้งานระบบ Search V2.pdf'
    },
    {
      icon: 'assets/dist/img/pdf_1.png',
      filename: 'แบบฟอร์มหนังสือแต่งตั้งจนท ADMIN',
      url: 'assets/filePDF/dxc_appointing_admin_template.pdf'
    },
    {
      icon: 'assets/dist/img/video.png',
      filename: 'วิดีโอสอนการใช้งานระบบสืบค้นประวัติการกระทำผิด V2',
      url: 'https://ssc.dxc.go.th/secured/index.html#/learningmodule/them/true'
    },
    // {
    //   icon: 'assets/dist/img/pdf_1.png',
    //   filename: 'แบบฟอร์มการขอ Username และ Password สำหรับ User',
    //   url: 'https://www.dxc.go.th/wp-content/uploads/2020/02/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%82%E0%B8%AD-Username-%E0%B9%81%E0%B8%A5%E0%B8%B0-Password-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A-%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87.pdf'
    // },
    // {
    //   icon: 'assets/dist/img/pdf_1.png',
    //   filename: 'แบบฟอร์มการขอ Username และ Password สำหรับ Admin',
    //   url: 'https://www.dxc.go.th/wp-content/uploads/2019/11/Username_Request_Form_for_Admin.pdf'
    // }
  ],
  otherlink: [
    {
      icon: 'assets/dist/img/chrome.png',
      filename: 'Google Chrome',
      url: 'https://www.google.com/intl/th/chrome/browser/'
    },
    {
      icon: 'assets/dist/img/windows.png',
      filename: '.NET Framework 4',
      url: 'http://www.microsoft.com/en-us/download/details.aspx?id=17851'
    },
    {
      icon: 'assets/dist/img/linkage-management.png',
      filename: 'Linkage Management',
      url: 'https://linkagemgmt.bora.dopa.go.th/#/'
    }
  ],
  faq: [
    {
      header: 'การใช้งานฐานข้อมูลทะเบียนราษฎร',
      icon: '',
      details: 'ก่อนใช้งานฐานข้อมูลทะเบียนราษฎรจะต้องยืนยันตัวต้นด้วย Smartcard กับกรมการปกครองด้วยโปรแกรม Government AMI Client for DXC'
    },
    {
      header: 'ปัญหาค้นข้อมูลกรมการขนส่งไม่ได้',
      icon: '',
      details: `เนื่องจากระบบมีปัญหาด้านเครือข่ายไปยังกรมการขนส่งจึงทำให้การสืบค้นข้อมูลจะต้องทำการกดค้นซ้ำหลายครั้งจึงจะสำเร็จ
ซึ่งปัญหานี้กำลังประสานงานเพื่อหาทางแก้ไข`
    },
    {
      header: 'ต้องการสืบค้นข้อมูลรถในครอบครองจาก',
      icon: '',
      details: `ศูนย์ DXC ไม่ได้รับสิทธิ์ให้สิบค้นข้อมูลทะเบียนรถจากเลขประจำตัวประชาชนและคณะทำงานศูนย์ DXC
      ก็มีมติไม่ให้มีการสืบด้นรถในครอบครองได้`
    },
    {
      header: 'ทำไมบางฐานข้อมูลถึงไม่มี ชื่อ นามสกุล และเลขประจำตัวประชาชน ในฟอร์มเงื่อนไข...',
      icon: '',
      details: `ระบบออกแบบตามข้อมูลปลายทาง ในกรณีแหล่งข้อมูลไม่มีฟิลด์ทั้ง 3 ครบหรือไม่อนุญาตให้ค้น ระบบ DXC
      ก็จะไม่แสดงฟิลด์นั้นๆให้ฟอร์มเงื่อนไข`
    },
    {
      header: 'ไม่สามารถดาวน์โหลดไฟล์ฟอร์แมต PDF ได้เมื่อใช้เบราว์เซอร์ Google Chrome',
      icon: '',
      details: `ถ้าปกติท่านสามารถดาวน์โหลดไฟล์ได้จากเว็บไซต์อื่นๆ
      และปกติท่านต้องเลือกตำแหน่งไฟล์ที่ดาวน์โหลดทุกครั้ง ขอแนะนำให้ท่านเข้าไปยัง
      เบราว์เซอร์>การตั้งค่า>การตั้งค่าขั้นสูง>ตำแหน่งไฟล์ที่ดาวน์โหลด
      ให้ทำการกำหนดตำแหน่งไฟล์และเอาเครื่องหมายถูกหน้าตัวเลือก "สอบถามที่เก็บไฟล์ก่อนดาวน์โหลด" ออก`
    },
  ],
  headerauthen: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJTdXp1WXpENGNVU3hIbGtvVnRSc2U1cExLSUNyNDdHNnFXQTBpUjVSb2VJIn0.eyJleHAiOjE2MjkyNzA1NDksImlhdCI6MTYyOTI1OTc0OSwianRpIjoiZjMxOWUxZGItOWVmNy00ZWU1LWI3MjctYjIwOTU3YWFiMzI3IiwiaXNzIjoiaHR0cHM6Ly9zc28uZHhjLmdvLnRoL2F1dGgvcmVhbG1zL0RYQyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJmOjZhNDYzOTRkLTZkNjEtNDFlNy04NTFhLTFmNjRiNjExMDIyNDo5NTIxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZHhjLXNlYXJjaC1zZXJ2ZXIiLCJzZXNzaW9uX3N0YXRlIjoiZDVhOGQ0N2EtZjc4MS00MTM1LWExODUtOTc3MmI5MDJkOGNjIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjgwODIiLCIqIiwiaHR0cHM6Ly9zZWFyY2guZHhjLmdvLnRoIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImR4Y191c2VyIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im5pbiBkeGMtZGF0YSBtaWNyb3Byb2ZpbGUtand0IHNzYy1kYXRhIGVtYWlsIGRlcGFydG1lbnRDb2RlIHByb2ZpbGUiLCJsYXN0TmFtZSI6IuC5gOC4iOC4o-C4tOC4jeC4nuC4t-C4iiIsInN1YiI6ImNfd2lsYWlsdWsiLCJzdWJvcmRpbmF0ZSI6IuC4quC4s-C4meC4seC4geC4h-C4suC4meC4geC4tOC4iOC4geC4suC4o-C4ouC4uOC4leC4tOC4mOC4o-C4o-C4oSIsInVzZXJzdGF0dXMiOiI1IiwiZ3JvdXBJZCI6IjUiLCJkZXBhcnRtZW50Q29kZSI6IjUiLCJsYXN0bmFtZUVuIjoiY2hhcm9lbnBodWV0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiY193aWxhaWx1ayIsImV4cHJEYXRlIjoiMjAyMi0wOS0xM1QwODo1NDo1MloiLCJjaXRpemVuQ2FyZE51bWJlciI6IjgyMzAyOTAwMTgxMzEiLCJuaW4iOiI4MjMwMjkwMDE4MTMxIiwicHJvdmluY2UiOiIxMiIsImVtYWlsIjoid2lsYWlsdWsxOTk1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiYWNjb3VudFR5cGUiOiIyIiwiZ3JvdXBzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZHhjX3VzZXIiLCJ1bWFfYXV0aG9yaXphdGlvbiJdLCJnaXZlbl9uYW1lIjoi4Lin4Li04LmE4Lil4Lil4Lix4LiB4Lip4LiT4LmMIiwidXNlcklkIjoiOTUyMSIsImZpcnN0TmFtZSI6IuC4p-C4tOC5hOC4peC4peC4seC4geC4qeC4k-C5jCIsImFjY291bnRJZCI6ImY6NmE0NjM5NGQtNmQ2MS00MWU3LTg1MWEtMWY2NGI2MTEwMjI0Ojk1MjEiLCJ1cG4iOiJjX3dpbGFpbHVrIiwiZmlyc3ROYW1lRW4iOiJ3aWxhaWx1ayIsInBob25lTnVtYmVyIjoiMDk0NDE2NDYwMCIsIm5hbWUiOiLguKfguLTguYTguKXguKXguLHguIHguKnguJPguYwg4LmA4LiI4Lij4Li04LiN4Lie4Li34LiKIiwicG9zaXRpb24iOiLguYDguIjguYnguLLguKvguJnguYnguLLguJfguLXguYgiLCJmYW1pbHlfbmFtZSI6IuC5gOC4iOC4o-C4tOC4jeC4nuC4t-C4iiJ9.M71Bv5qHENT2d77pZ3L6I7hCWIifpblP6xj9q0w6NgbGQuXkHbVoZh6yP7jBOOsP0CToxZvitXR6yae1EmRofPz-_YMhPBphrS4gWIjO_IBFmRmzwTxVZZ-X2Og9yRuVNcx4pWZ25EUZJjZzSfPMW_JAGbOHuVuvlC4psdLQDJlSm3zTZ9XTOZMFyY1f7S5FfTJ2CN_LJv_eEhGXkUhp5yhs3JQ_qeLvIUo1PEQvDxnQclq7fPrudLKe8MFAjY-gVuaFePZLi5A35jdY9aglO0mcKqyEgljqhuS_Shn-WqlIQYpgotiXPSjzRH9QWqpRbzPRYntY25Gc94I9nRRCqA',
  baseUrl: 'https://localhost',
  production: false,
  apiUrl: '/api/sso/access-token',

  keycloakRealm: 'keycloak-auth',
  keycloakClient: 'auth-client',
  keycloakBaseUrl: '/',
  'portal': {
    'dxcsearch': {
      'title': 'DXC Search',
      'url': '/dxcsearch',
      'img': 'assets/dist/img/dxcsearch.png'
    },
    'dxcmis': {
      'title': 'DXC MIS',
      'url': '/dxcmsi',
      'img': 'assets/dist/img/doc.png'
    },
    'dxcjustis': {
      'title': 'DXC Justice',
      'url': '/dxcjustice',
      'img': 'assets/dist/img/dlt.png'
    }
  },
  'qm': {
    'title': '',
    'url': '/qm',
    'img': '',
     'sub': [
      {

        // กรมการปกครอง
        dopa: {
          title: 'กรมการปกครอง',
          titleEn: 'dopa',
          url: '',
          img: 'assets/dist/img/dopa.png',
          sub: [{
            // citizen: {
            //   title: 'ฐานข้อมูลทะเบียนราษฎร',
            //   url: '/citizen/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/dopa-citizen.png',
            //   model: 'Dxc_Model_Dopa_Citizen',
            //   remark1: `การค้นด้วยชื่อและนามสกุลต้องสะกดให้ถูกต้อง,
            //     ค้นได้เฉพาะชื่อปัจจุบัน,
            //     และต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
            //   schema: 'dopa-citizen',
            //   service: 'citizenService',
            //   report: 'ReportDopaCitizen',
            //   db: 'dopa-citizendb',
            //   singleSearch: 'citizenCardNumber'
            // },
            persons: {
              title: 'ทะเบียนราษฎร (Linkage)',
              url: '/persons/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dopa-citizen.png',
              model: 'Dxc_Model_Dopa_Moi_Persons',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-person',
              schemaGroup: 'moi-dopa-person',
              service: 'moiDopaPersonsService',
              report: 'ReportDopaMoiPersons',
              db: 'dopa-moi-dopa-persondb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            thaiidcard: {
              title: 'บัตรประจำตัวประชาชน (Linkage)',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-thai-id-cards.png',
              model: 'Dxc_Model_Moi_Dopa_ThaiIdcard',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-thai-id-cards',
              schemaGroup: 'moi-dopa-thai-id-cards',
              service: 'moiDopaThaiIdCardService',
              report: 'ReportDopaMoiThaiidcard',
              db: 'dopa-moi-dopa-thai-id-cardsdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            addresses: {
              title: 'ฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท) (Linkage)',
              url: '/addresses/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-addresses.png',
              model: 'Dxc_Model_Dopa_Moi_Addresses',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-addresses',
              schemaGroup: 'moi-dopa-addresses',
              service: 'moiDopaAddressesService',
              report: 'ReportMoiDopaAddresses',
              db: 'dopa-moi-dopa-addressesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            birthcertificates: {
              title: 'ฐานข้อมูลใบสูติบัตร (Linkage)',
              url: '/birthcertificates/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-birth-certificates.png',
              model: 'Dxc_Model_Moi_Dopa_Birth_Certificates',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-birth-certificates',
              schemaGroup: 'moi-dopa-birth-certificates',
              service: 'birthcertificatesService',
              report: 'Reportbirthcertificates',
              db: 'dopa-moi-dopa-birth-certificatesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-aliens
            aliens: {
              title: 'ข้อมูลทะเบียนบุคคลต่างด้าว (Linkage)',
              url: '/aliens/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-alien.png',
              model: 'Dxc_Model_Dopa_Moi_Aliens',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-alien',
              schemaGroup: 'moi-dopa-alien',
              service: 'moiDopaAliensService',
              report: 'ReportDopaMoiAliens',
              db: 'dopa-moi-dopa-aliendb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // // moi-dopa-border-passes
            borderpasses: {
              title: 'ข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด (Linkage)',
              url: '/borderpasses/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-border-passes.png',
              model: 'Dxc_Model_Moi_Dopa_Border_Passes',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-border-passes',
              schemaGroup: 'moi-dopa-border-passes',
              service: 'borderPassesService',
              report: 'ReportborderPasses',
              db: 'dopa-moi-dopa-border-passesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-death-certificates
            // deathcertificates: {
            //   title: 'ข้อมูลใบมรณบัตร (Linkage)',
            //   url: '/deathcertificates/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-death-certificates.png',
            //   model: 'Dxc_Model_Dopa_Moi_Death_Certificates',
            //   remark1: `การค้นด้วยชื่อและนามสกุลต้องสะกดให้ถูกต้อง,
            //     ค้นได้เฉพาะชื่อปัจจุบัน,
            //     และต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
            //   schema: 'dopa-moi-dopa-death-certificates',
            //   schemaGroup: 'moi-dopa-death-certificates',
            //   service: 'moiDopaDeathCertificatesService',
            //   report: 'ReportDopaMoiDeathCertificates',
            //   db: 'dopa-moi-dopa-death-certificatesdb',
            //   singleSearch: 'citizenCardNumber'
            // },
            // moi-dopa-divorce-certificates
            divorcecertificates: {
              title: 'ข้อมูลทะเบียนหย่า (Linkage)',
              url: '/divorcecertificates/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-divorce-certificates.png',
              model: 'Dxc_Model_Dopa_Moi_Divorce_Certificates',
              remark1: `การค้นด้วยชื่อและนามสกุลต้องสะกดให้ถูกต้อง,
                ค้นได้เฉพาะชื่อปัจจุบัน,
                และต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-divorce-certificates',
              schemaGroup: 'moi-dopa-divorce-certificates',
              service: 'moiDopaDivorceCertificatesService',
              report: 'ReportDopaMoiDivorceCertificates',
              db: 'dopa-moi-dopa-divorce-certificatesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-education-backgroundes
            // educationbackgroundes: {
            //   title: 'ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ(Linkage)',
            //   url: '',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-education-backgrounds.png',
            //   model: 'Dxc_Model_Moi_Dopa_Education_Backgroundes',
            //   remark1: `ข้อมูลทดสอบ`,
            //   schema: 'dopa-moi-dopa-education-backgrounds',
            //   schemaGroup: 'moi-dopa-education-backgrounds',
            //   service: 'moiDopaEducationBackgroundesService',
            //   report: 'ReportDopaEducationBackgroundes',
            //   db: 'dopa-moi-dopa-education-backgroundsdb',
            //   singleSearch: 'citizenCardNumber'
            // },
            // moi-dopa-marriage-certificates
            marriagecertificates: {
              title: 'ข้อมูลทะเบียนสมรส (Linkage)',
              url: '/marriagecertificates/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-marriage-certificates.png',
              model: 'Dxc_Model_Moi_Dopa_Marriage_Certificates',
              remark1: `ข้อมูลทดสอบ`,
              schema: 'dopa-moi-dopa-marriage-certificates',
              schemaGroup: 'moi-dopa-marriage-certificates',
              service: 'marriageCertificatesService',
              report: 'ReportMarriageCertificates',
              db: 'dopa-moi-dopa-marriage-certificatesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-passports
            // passports: {
            //   title: 'ข้อมูลรายการประวัติหนังสือเดินทาง (Linkage)',
            //   url: '/passports/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-passports.png',
            //   model: 'Dxc_Model_Moi_Dopa_Passports',
            //   remark1: `ข้อมูลทดสอบ`,
            //   schema: 'dopa-moi-dopa-passports',
            //   schemaGroup: 'moi-dopa-passports',
            //   service: 'moiDopaPassportsService',
            //   report: 'ReportMoiDopaPassports',
            //   db: 'dopa-moi-dopa-passportsdb',
            //   singleSearch: 'citizenCardNumber'
            // },
            // moi-dopa-person-face-photos
            facephotos: {
              title: 'ข้อมูลภาพใบหน้า (Linkage)',
              url: '/facephotos/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-person-face-photo.png',
              model: 'Dxc_Model_Dopa_Moi_Face_Photos',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dopa-moi-dopa-person-face-photo',
              schemaGroup: 'moi-dopa-person-face-photo',
              service: 'moiDopaFacePhotosService',
              report: 'ReportMoiDopaFacePhotos',
              db: 'dopa-moi-dopa-person-face-photodb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-students
            // students: {
            //   title: 'ข้อมูลนักเรียน-นักศึกษา กระทรวงศึกษาธิการ(Linkage)',
            //   url: '',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-students.png',
            //   model: 'Dxc_Model_Moi_Moe_Students',
            //   remark1: `ข้อมูลทดสอบ`,
            //   schema: 'moe-moi-moe-students',
            //   schemaGroup: 'moi-dopa-students',
            //   service: 'MoiMoeStudentsService',
            //   report: 'ReportMoeStudents',
            //   db: 'moe-moi-moe-studentsdb',
            //   singleSearch: 'citizenCardNumber'
            // },
            // mol-dopa-por4
            por4: {
              title: 'ฐานข้อมูลใบอนุญาต ป.4 ครอบครองอาวุธปืน (Linkage)',
              url: '/moi-dopa-por4-licenses/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-por4-licenses.png',
              model: 'Dxc_Model_Dopa_MoiDopaPor4Licenses',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน',
              schema: 'dopa-moi-dopa-por4-licenses',
              schemaGroup: 'moi-dopa-por4-licenses',
              service: 'moiDopaPor4Service',
              report: 'ReportDopaMoiPor4',
              db: 'dopa-moi-dopa-por4-licensesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            // moi-dopa-person-changename-primary
            personchangenameprimary: {
              title: 'ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อตัว (Linkage)',
              url: '/moi-dopa-person-changename-primary/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-person-changename-primary.png',
              model: 'Dxc_Model_Dopa_Moi_PersonChangenamePrimary',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน',
              schema: 'dopa-moi-dopa-person-changename-primary',
              schemaGroup: 'moi-dopa-person-changename-primary',
              service: 'moiDopaPersonChangenamePrimaryService',
              report: 'ReportMoiDopaPersonChangenamePrimary',
              db: 'dopa-moi-dopa-person-changename-primarydb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            personfirstnamelastname: {
              title: 'ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)',
              url: '/moi-dopa-person-firstname-lastname/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-person-firstname-lastname.png',
              model: 'Dxc_Model_Dopa_MoiDopaPersonFirstnameLastname',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน กรุณากรอกชื่อตัว และ ชื่อสกุล ให้ตรงกับบัตรประชาชนเท่านั้น',
              schema: 'dopa-moi-dopa-person-firstname-lastname',
              schemaGroup: 'moi-dopa-person-firstname-lastname',
              service: 'moiDopaPersonFirstnameLastnameService',
              report: 'ReportMoiDopaPersonFirstnameLastname',
              // db: 'dopa-moi-dopa-person-firstname-lastnamedb',
              // singleSearch: 'citizenCardNumber'
            },
            changelastnameprimary: {
              title: 'ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อสกุล (Linkage)',
              url: '/dopa-moi-dopa-person-changelastname/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dopa-person-changelastname.png',
              model: 'Dxc_Model_Dopa_MoiDopaPersonChangelastname',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน',
              schema: 'dopa-moi-dopa-person-changelastname',
              schemaGroup: 'moi-dopa-person-changelastname',
              service: 'moiDopaPersonChangelastnameService',
              report: 'ReportMoiDopaPersonChangelastname',
              db: 'dopa-moi-dopa-person-changelastnamedb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        // สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด
        oncb: {
          title: 'สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด',
          titleEn: 'oncb',
          shorttitle: 'สำนักงาน ปปส.',
          url: '',
          img: 'assets/dist/img/oncb.png',
          sub: [{
            narcoticOffender: {
              title: 'ประวัติคดียาเสพติด',
              url: '/narcoticOffender/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/oncb-narcotic-offender.png',
              model: 'Dxc_Model_Oncb_NarcoticOffender',
              remark1: 'สืบค้นได้เฉพาะข้อมูล 5 ปี ย้อนหลัง,เฉพาะคดีที่สิ้นสุด, ข้อมูลอาจจะล้าหลัง 1-2 วันจากปัจจุบัน',
              schema: 'oncb-narcotic-offender',
              schemaGroup: 'narcotic-offender',
              service: 'narcoticOffenderService',
              report: 'ReportOncbNarcoticOffender',
              db: 'oncb-narcotic-offenderdb',
              singleSearch: 'citizencardnumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'allgetion'
            }
          }]
        },
        // กรมคุมประพฤติ
        dop: {
          title: 'กรมคุมประพฤติ',
          titleEn: 'dop',
          url: '',
          img: 'assets/dist/img/dop.png',
          sub: [{
            probationer: {
              title: 'ผู้ถูกคุมประพฤติ',
              url: '/probationer/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dop-probationee.png',
              model: 'Dxc_Model_Dop_Probationer',
              remark1: 'เป็นข้อมูล ประเภท สอดส่องผู้ใหญ่ ตั้งแต่วันที่ 1 ต.ค. 2549 โดยข้อมูลจะล้าหลัง 1 วัน จากปัจจุบัน',
              schema: 'dop-probationee',
              schemaGroup: 'probationee',
              service: 'probationerService',
              report: 'ReportDopProbationer',
              db: 'dop-probationeedb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb: 'allgetion'
            },
            probationernarcotics: {
              title: 'ผู้ถูกคุมประพฤติในคดียาเสพติดและผลการเข้าร่วมกิจกรรมแก้ไขฟื้นฟู',
              url: '/probationernarcotics/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dop-probationee.png',
              model: 'Dxc_Model_Dop_Probationer_Narcotics',
              remark1: '',
              schema: 'dop-probationer-narcotics',
              schemaGroup: 'probationer-narcotics',
              service: 'probationerNarcoticsService',
              report: 'ReportDopProbationerNarcotics',
              // db: 'dop-probationer-narcoticsdb',
              // singleSearch: 'citizenCardNumber',
              // countDb: 'allgetion'
            },
          }]
        },
        //กรมพินิจและคุ้มครองเด็กและเยาวชน
        djop: {
          title: 'กรมพินิจและคุ้มครองเด็กและเยาวชน',
          titleEn: 'djop',
          shorttitle: 'กรมพินิจฯ',
          url: '',
          img: 'assets/dist/img/djop.png',
          sub: [{
            // juvenileOffender: {
            //   title: 'เด็กหรือเยาวชนผู้กระทำผิด',
            //   url: '/juvenileOffender/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/djop-juvenile-offender.png',
            //   model: 'Dxc_Model_Djop_JuvenileOffender',
            //   remark1: `ข้อมูลอัพเดทล่าสุด 16 พฤศจิกายน 2563`,
            //   schema: 'djop-juvenile-offender',
            //   schemaGroup: 'juvenile-offender',
            //   service: 'juvenileOffenderService',
            //   report: 'ReportJuvenileOffender',
            //   db: 'djop-juvenile-offenderdb',
            //   singleSearch: 'citizenCardNumber',
            //   singleSearchFnameLname: 'FnameLname',
            //   countDb: 'allgetion'
            // },
            juvenileOffender65: {
              title: 'เด็กหรือเยาวชนผู้กระทำผิด',
              url: '/juvenileOffender65/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/djop-juvenile-offender.png',
              model: 'Dxc_Model_Djop_JuvenileOffender65',
              remark1: ``,
              schema: 'djop-juvenile-offender-new',
              schemaGroup: 'juvenile-offender65',
              service: 'juvenileOffender65Service',
              report: 'ReportDjopJuvenileOffender65',
              db: 'djop-juvenile-offender65db',
              singleSearch: 'jvnCardId',
              // singleSearchFnameLname: 'FnameLname',
              countDb: 'allgetion'
            }

          }]
        },
        //กรมราชทัณฑ์
        doc: {
          title: 'กรมราชทัณฑ์',
          titleEn: 'doc',
          url: '',
          img: 'assets/dist/img/doc.png',
          sub: [{
            prisoner: {
              title: 'ผู้ต้องขัง (คดีที่พิพากษาแล้ว)',
              url: '/prisoner/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/doc-prisoner.png',
              model: 'Dxc_Model_Doc_Prisoner',
              remark1: `เชื่อมกับระบบของกรมราชทัณฑ์ระบบใหม่แล้ว, ปรับปรุงข้อมูลใหม่วันละครั้ง`,
              schema: 'doc-prisoner',
              schemaGroup: 'prisoner',
              service: 'prisonerService',
              report: 'ReportDocPrisoner',
              db: 'doc-prisonerdb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb: 'allgetion'
            },
            regseize: {
              title: 'อายัดตัวผู้ต้องขัง',
              url: '/regseize/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/doc-reg-seize.png',
              model: 'Dxc_Model_Doc_Reg_seize',
              remark1: 'เชื่อมกับระบบของกรมราชทัณฑ์ระบบใหม่แล้ว, ปรับปรุงข้อมูลใหม่วันละครั้ง',
              schema: 'doc-reg-seize',
              schemaGroup: 'reg-seize',
              service: 'regSeizeService',
              report: 'ReportDocRegseize',
              db: 'doc-reg-seizedb',
              singleSearch: 'citizenCardNumber',
              // singleSearchFnameLname: 'FnameLname',
              countDb: 'allgetion'
            },
            remandee: {
              title: 'ผู้ต้องขัง (คดีที่ยังไม่พิพากษา)',
              url: '/remandee/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/doc-prisoner.png',
              model: 'Dxc_Model_Doc_Remandee',
              remark1: 'เชื่อมกับระบบของกรมราชทัณฑ์ระบบใหม่แล้ว, ปรับปรุงข้อมูลใหม่วันละครั้ง',
              schema: 'doc-prisoner-no-just',
              schemaGroup: 'prisoner-no-just',
              service: 'remandeeService',
              report: 'ReportDocRemandee',
              db: 'doc-prisoner-no-justdb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb: 'allgetion'
            },
            // prisonerimages: {
            //   title: 'ภาพใบหน้าผู้ต้องขัง (อยู่ระหว่างการทดสอบ)',
            //   url: '/prisonerimages/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/doc-prisoner-image.png',
            //   model: 'Dxc_Model_Doc_PrisonerImages',
            //   remark1: 'ข้อมูลทดสอบ',
            //   schema: 'doc-prisoner-images',
            //   schemaGroup: 'prisoner-images',
            //   service: 'prisonerImagesService',
            //   report: 'ReportDocPrisonerImages',
            //   // db: 'doc-prisoner-imagesdb',
            //   // singleSearch: 'citizenCardNumber'
            // },
            prisonerbankrupt: {
              title: 'ผู้ต้องขัง (บุคคลล้มละลาย)',
              url: '/prisonerbankrupt/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/doc-prisoner.png',
              model: 'Dxc_Model_Doc_Prisoner_Bankrupt',
              remark1: 'ปรับปรุงข้อมูลใหม่วันละครั้ง',
              schema: 'doc-prisoner-bankrupt',
              schemaGroup: 'prisoner-bankrupt',
              service: 'prisonerBankruptService',
              report: 'ReportDocPrisonerBankrupt',
              // db: 'doc-prisoner-bankruptdb',
              // singleSearch: 'citizenCardNumber',
              // singleSearchFnameLname: 'FnameLname',
              // countDb: 'allgetion'
            },
          }]
        },
        // กรมคุ้มครองสิทธิและเสรีภาพ
        rlpd: {
          title: 'กรมคุ้มครองสิทธิและเสรีภาพ',
          titleEn: 'rlpd',
          url: '',
          img: 'assets/dist/img/rlpd.png',
          sub: [{
            requestors: {
              title: 'ผู้ร้องทุกข์',
              url: '/requestors/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rlpd-complainant.png',
              model: 'Dxc_Model_Rlpd_Requestors',
              remark1: '',
              schema: 'rlpd-requestors',
              schemaGroup: 'requestors',
              service: 'requestorsService',
              report: 'ReportRlpdRequestors',
              db: 'rlpd-requestorsdb',
              singleSearch: 'personNationalIdentificationId',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
            crimedefendantcompensation: {
              title: 'ความช่วยเหลือทางด้านการเงิน แก่จำเลยในคดีอาญา',
              url: '/crimedefendantcompensation/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rlpd-crime-defendant-compensation.png',
              model: 'Dxc_Model_Rlpd_CrimeDefendantCompensation',
              remark1: '',
              schema: 'rlpd-crime-defendant-compensation',
              service: 'crimeDefendantCompensationService',
              report: 'ReportRlpdCrimeDefendantCompensation',
              // db: 'rlpd-crime-defendant-compensationdb',
              // singleSearch: 'dftCitizenId'
            },
            crimevictimcompensation: {
              title: 'ความช่วยเหลือทางด้านการเงิน แก่ผู้เสียหายในคดีอาญา',
              url: '/crimevictimcompensation/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rlpd-crime-victim-compensation.png',
              model: 'Dxc_Model_Rlpd_CrimeVictimCompensation',
              remark1: '',
              schema: 'rlpd-crime-victim-compensation',
              service: 'crimeVictimCompensationService',
              report: 'ReportRlpdCrimeVictimCompensation',
              db: 'rlpd-crime-victim-compensationdb',
              singleSearch: 'victimCitizenId',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
          }]
        },
        // สำนักงานป้องกันและปราบปรามการฟอกเงิน
        amlo: {
          title: 'สำนักงานป้องกันและปราบปรามการฟอกเงิน',
          titleEn: 'amlo',
          url: '',
          img: 'assets/dist/img/amlo.png',
          sub: [{
            moneylaunderingcase: {
              title: 'ข้อมูลประวัติคดี ปปง. (คดีถึงที่สุดแล้ว)',
              url: '/moneylaunderingcase/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/amlo-money-laundering-case.png',
              model: 'Dxc_Model_Amlo_Moneylaunderingcase',
              remark1: 'สืบค้นได้เฉพาะข้อมูลคดีที่สิ้นสุดแล้วเท่านั้น',
              schema: 'amlo-money-laundering-case',
              schemaGroup: 'money-laundering-case',
              service: 'moneyLaunderingCaseService',
              report: 'ReportAmloMoneyLaunderingCase',
              // db: 'amlo-money-laundering-casedb',
              // singleSearch: 'casedataid'
            },
          }]
        },
        // กรมบังคับคดี
        led: {
          title: 'กรมบังคับคดี',
          titleEn: 'led',
          url: '',
          img: 'assets/dist/img/led.png',
          sub: [{
            bankruptcycase: {
              title: 'ข้อมูลบุคคลล้มละลาย',
              url: '/bankruptcycase/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/led-bankruptcy-case.png',
              model: 'Dxc_Model_Led_BankruptcyCase',
              remark1: 'เฉพาะคดีที่สิ้นสุด, ข้อมูลอาจจะล้าหลัง 1-2 วันจากปัจจุบัน',
              schema: 'led-bankruptcy-case',
              schemaGroup: 'bankruptcy-case',
              service: 'bankruptcyCaseService',
              report: 'ReportLedBankruptcyCase',
              db: 'led-bankruptcy-casedb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
          }]
        },
        // กระทรวงการคลัง
        mof: {
          title: 'กระทรวงการคลัง',
          titleEn: 'mof',
          url: '',
          img: 'assets/dist/img/mof.png',
          sub: [{
            registrant: {
              title: 'ทะเบียนผู้มีรายได้น้อย',
              url: '/registrant/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/mof-konjon.png',
              model: 'Dxc_Model_Mof_Registrant',
              remark1: ' ',
              schema: 'mof-registrant',
              schemaGroup: 'registrant',
              service: 'registrantService',
              report: 'ReportMofRegistrant',
              db: 'mof-registrantdb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
          }]
        },
        // สถาบันนิติวิทยาศาสตร์
        cifs: {
          title: 'สถาบันนิติวิทยาศาสตร์',
          titleEn: 'cifs',
          url: '',
          img: 'assets/dist/img/cifs.png',
          sub: [{
            anonymouscorpse: {
              title: 'ฐานข้อมูลศพนิรนาม',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/cifs-anonymous-corpse.png',
              model: 'Dxc_Model_Cifs_AnonymousCorpse',
              remark1: 'มีข้อมูลถึงวันที่ 15 กรกฎาคม 2565',
              schema: 'cifs-anonymous-corpse',
              schemaGroup: 'anonymous-corpse',
              service: 'anonymousCorpseService',
              report: 'ReportCifsAnonymousCorpse',
              // db: 'cifs-anonymous-corpsedb',
              // singleSearch: 'citizenCardNumber'
            },
            missingperson: {
              title: 'ฐานข้อมูลคนหาย',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/cifs-missing-person.png',
              model: 'Dxc_Model_Cifs_MissingPerson',
              remark1: '',
              schema: 'cifs-missing-person',
              schemaGroup: 'missing-person',
              service: 'missingPersonService',
              report: 'ReportCifsMissingPerson',
              db: 'cifs-missing-persondb',
              singleSearch: 'citizenCardNumber',
              // singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
            corpse: {
              title: 'ฐานข้อมูลคนนิรนาม',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/cifs-corpse.png',
              model: 'Dxc_Model_Cifs_Corpse',
              remark1: 'มีข้อมูลถึง 19 มิถุนายน 2562',
              schema: 'cifs-corpse',
              schemaGroup: 'corpse',
              service: 'corpseService',
              report: 'ReportCifsCifsCorpse',
              db: 'cifs-corpsedb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
            // reportverification: {
            //   title: 'รายงานการตรวจพิสูจน์ (Linkage)(อยู่ระหว่างการทดสอบ)',
            //   url: '',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/cifs-report-verification.png',
            //   model: 'Dxc_Model_Cifs_ReportVerification',
            //   remark1: '',
            //   schema: 'cifs-report-verification',
            //   schemaGroup: 'report-verification',
            //   service: 'reportVerificationService',
            //   report: 'ReportCifsReportVerification',
            //   db: 'cifs-report-verificationdb',
            //   singleSearch: 'citizenCardNumber',
            //   countDb : 'normal'
            // },
          }]
        },
        // กรมที่ดิน
        dol: {
          title: 'กรมที่ดิน',
          titleEn: 'dol',
          url: '',
          img: 'assets/dist/img/dol.png',
          sub: [{
            landandcondominiumtitles: {
              title: 'ฐานข้อมูลการครอบครองกรรมสิทธิ์ที่ดินและห้องชุด(Linkage)',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dol-land-and-condominium-titles.png',
              model: 'Dxc_Model_Dol_Land_and_Condominium_Titles',
              remark1: 'กรุณาเสียบบัตร Smart card ของหมายเลขบัตรที่ต้องการค้นหา เพื่อยืนยันตัวตนก่อนใช้งาน',
              schema: 'dol-moi-dol-land-and-condominium-titles',
              schemaGroup: 'moi-dol-land-and-condominium-titles',
              service: 'landandcondominiumtitlesService',
              report: 'ReportDolLandAndCondominiumTitles',
              db: 'dol-moi-dol-land-and-condominium-titlesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        //  คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ(ป.ป.ช.)
        nacc: {
          title: 'คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ(ป.ป.ช.)',
          titleEn: 'nacc',
          url: '',
          img: 'assets/dist/img/nacc.png',
          sub: [{
            corruptionaccuseds: {
              title: 'ข้อมูลผู้ถูกกล่าวหาคดีด้านการทุจริต(Linkage)',
              url: '/corruptionaccuseds/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/nacc-corruption-accuseds.png',
              model: 'Dxc_Model_Nacc_Moi_Corruption_Accuseds',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน',
              schema: 'nacc-moi-nacc-corruption-accuseds',
              schemaGroup: 'moi-nacc-corruption-accuseds',
              service: 'corruptionaccusedsService',
              report: 'ReportNaccCorruptionaccuseds',
              db: 'nacc-moi-nacc-corruption-accusedsdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'allgetion'
            },
          }]
        },
        // กระทรวงเกษตรและสหกรณ์
        moac: {
          title: 'กรมประมง',
          titleEn: 'moac',
          url: '',
          img: 'assets/dist/img/moac.png',
          sub: [{
            // moac-fisheries-illegal-fishing-cases
            fisheriesillegal: {
              title: 'คดีประมงผิดกฎหมาย(Linkage)',
              url: '/fisheriesillegal/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-moac-fisheries-illegal-fishing-cases.png',
              model: 'Dxc_Model_Moi_Moac_Fisheries_Illegal',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'moac-moi-moac-fisheries-illegal-fishing-cases',
              schemaGroup: 'moi-moac-fisheries-illegal-fishing-cases',
              service: 'moiMoacFisheriesIllegalService',
              report: 'ReportMoacMoiFisheriesIllegal',
              db: 'moac-moi-moac-fisheries-illegal-fishing-casesdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'allgetion'
            },
          }]
        },
        // สำนักงานหลักประกันสุขภาพแห่งชาติ
        nhso: {
          title: 'สำนักงานหลักประกันสุขภาพแห่งชาติ',
          titleEn: 'nhso',
          url: '/nhso',
          img: 'assets/dist/img/nhso.png',
          sub: [{
            healthinsuranceright: {
              title: 'ฐานข้อมูลสิทธิประกันสุขภาพและการลงทะเบียนกับหน่วยบริการ (Linkage)',
              url: '/moi-nhso-health-insurance-rights/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-nhso-health-insurance-rights.png',
              model: 'Dxc_Model_Nhso_Moi_Health_Insurance_Rights',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'nhso-moi-nhso-health-insurance-rights',
              schemaGroup: 'moi-nhso-health-insurance-rights',
              service: 'moiNhsoHealthInsuranceRightsService',
              report: 'ReportNhsoMoiHealthInsuranceRights',
              db: 'nhso-moi-nhso-health-insurance-rightsdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        // กรมพัฒนาฝีมือแรงงาน
        dsd: {
          title: 'กรมพัฒนาฝีมือแรงงาน',
          titleEn: 'dsd',
          url: '/dsd',
          img: 'assets/dist/img/dsd.png',
          sub: [{
            workforcedevelopments: {
              title: 'ฐานข้อมูลการพัฒนาฝีมือแรงงาน(Linkage)',
              url: '/workforcedevelopments/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dsd-workforce-developments.png',
              model: 'Dxc_Model_Dsd_Moi_Workforce_Developments',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dsd-moi-dsd-workforce-developments',
              schemaGroup: 'moi-dsd-workforce-developments',
              service: 'moiDsdWorkforceDevelopmentsService',
              report: 'ReportMoiDsdWorkforceDevelopments',
              db: 'dsd-moi-dsd-workforce-developmentsdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        // กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์
        // msdhs: {
        //   title: 'กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์',
        //   titleEn: 'msdhs',
        //   url: '/msdhs',
        //   img: 'assets/dist/img/msdhs.png',
        //   sub: [{
        //     newbornbabies: {
        //       title: 'ฐานข้อมูลทะเบียนแรกเกิด(Linkage)',
        //       url: '/moi-msdhs-new-born-babies/search',
        //       img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-msdhs-new-born-babies.png',
        //       model: 'Dxc_Model_Msdhs_Moi_New_Born_Babies',
        //       remark1: 'ข้อมูลทดสอบ',
        //       schema: 'msdhs-moi-msdhs-new-born-babies',
        //       schemaGroup: 'moi-msdhs-new-born-babies',
        //       service: 'moiMsdhsNewBornBabiesService',
        //       report: 'ReportMsdhsMoiNewBornBabies',
        //       db: 'msdhs-moi-msdhs-new-born-babiesdb',
        //       singleSearch: 'citizenCardNumber'
        //     },
        //   }]
        // },
        // กรมสอบสวนคดีพิเศษ
        dsi: {
          title: 'กรมสอบสวนคดีพิเศษ',
          titleEn: 'dsi',
          url: '/dsi',
          img: 'assets/dist/img/dsi.png',
          sub: [{
            warrant: {
              title: 'ฐานข้อมูลหมายจับคดีพิเศษ',
              url: '/warrant/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/warrant.png',
              model: 'Dxc_Model_Dsi_Warrant',
              remark1: `เป็นข้อมูลบุคคลที่มีหมายจับในคดีพิเศษอยู่จริงเท่านั้น หากค้นหาแล้วไม่พบข้อมูล 
              แสดงว่า บุคคลนั้นไม่มีหมายจับในคดีพิเศษ หรือ บุคคลนั้นมีหมายจับ แต่หมายจับนั้นถูกยกเลิกหรือถูกถอนหมายจับแล้ว`,
              schema: 'dsi-warrant',
              schemaGroup: 'warrant',
              service: 'dsiWarrantService',
              report: 'ReportDsiWarrant',
              db: 'dsi-warrantdb',
              singleSearch: 'idCard',
              countDb: 'allgetion'
            },
          }]
        },
        // สำนักงานตำรวจแห่งชาติ
        rtp: {
          title: 'สำนักงานตำรวจแห่งชาติ',
          titleEn: 'rtp',
          url: '/rtp',
          img: 'assets/dist/img/rtp.png',
          sub: [{
            // missingcarcase: {
            //   title: 'ฐานข้อมูลคดีรถหาย (ฐานข้อมูลเก่า ระบบ Police)',
            //   url: '/missing-car-case',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-missing-car-case.png',
            //   model: 'Dxc_Model_Rtp_MissingCarCase',
            //   remark1: 'ข้อมูลจากระบบเก่า และไม่มีการปรับปรุงแล้วตั้งแต่ พฤษภาคม 2556',
            //   schema: 'rtp-missing-car-case',
            //   schemaGroup: 'missing-car-case',
            //   service: 'missingcarcaseService',
            //   report: 'ReportRtpMissingCarCase',
            //   // db: 'rtp-missing-car-casedb',
            //   // singleSearch: 'citizenCardNumber'
            // },
            // rtparrestwarrant: {
            //   title: 'ฐานข้อมูลประกาศสืบจับ (ฐานข้อมูลเก่า ระบบ Police)',
            //   url: '/arrest-warrant/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-arrest-warrant.png',
            //   model: 'Dxc_Model_Rtp_ArrestWarrant',
            //   remark1: 'ข้อมูลจากระบบเก่า และไม่มีการปรับปรุงแล้วตั้งแต่ พฤษภาคม 2556',
            //   schema: 'rtp-arrest-warrant',
            //   schemaGroup: 'arrest-warrant',
            //   service: 'arrestWarrantService',
            //   report: 'ReportRtpArrestWarrant',
            //   // db: 'rtp-arrest-warrantdb',
            //   // singleSearch: 'citizenCardNumber',
            //   // countDb : 'allgetion'
            // },
            // criminal: {
            //   title: 'ฐานข้อมูลผู้กระทำผิดกฎหมาย (ฐานข้อมูลเก่า ระบบ Police)',
            //   url: '/criminal/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-criminal.png',
            //   model: 'Dxc_Model_Rtp_Criminal',
            //   remark1: 'ข้อมูลจากระบบเก่า และไม่มีการปรับปรุงแล้วตั้งแต่ พฤษภาคม 2556',
            //   schema: 'rtp-criminal',
            //   schemaGroup: 'criminal',
            //   service: 'criminalService',
            //   report: 'ReportRtpCriminal',
            //   db: 'rtp-criminaldb',
            //   singleSearch: 'citizenCardNumber',
            //   singleSearchFnameLname: 'FnameLname',
            //   countDb : 'allgetion'
            // },
            // missingpersoncase: {
            //   title: 'ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police)',
            //   url: '/missing-person-case/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-missing-person-case.png',
            //   model: 'Dxc_Model_Rtp_MissingPersonCase',
            //   remark1: 'ข้อมูลจากระบบเก่า และไม่มีการปรับปรุงแล้วตั้งแต่ พฤษภาคม 2556',
            //   schema: 'rtp-missing-person-case',
            //   schemaGroup: 'missing-person-case',
            //   service: 'missingPersonCaseService',
            //   report: 'ReportRtpMissingPersonCase',
            //   db: 'rtp-missing-person-casedb',
            //   singleSearch: 'citizenCardNumber',
            //   singleSearchFnameLname: 'FnameLname',
            //   countDb : 'normal'
            // },
            criminalcase: {
              title: 'ฐานข้อมูลคดีอาญา',
              url: '/criminal-case/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-criminal-case.png',
              model: 'Dxc_Model_Rtp_CriminalCase',
              remark1: 'ค้นหาได้เฉพาะคดีอาญาเท่านั้น : ค้นหาข้อมูลได้ด้วยเลขบัตรประจำตัวประชาชน หรือชื่อ - นามสกุลผู้ต้องหา อย่างใดอย่างหนึ่ง',
              schema: 'rtp-criminal-case',
              schemaGroup: 'criminal-case',
              service: 'criminalCaseService',
              report: 'ReportRtpCriminalCase',
              // db: 'rtp-criminal-casedb',
              // singleSearch: 'citizenCardNumber',
              // countDb : 'allgetion'
            },
            // travelinformation: {
            //   title: 'ฐานข้อมูลการเดินทางเข้าออกประเทศ',
            //   url: '/travel-information/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-travel-information.png',
            //   model: 'Dxc_Model_Rtp_TravelInformation',
            //   remark1: 'ทดสอบ',
            //   schema: 'rtp-thai-entry-exit',
            //   schemaGroup: 'thai-entry-exit',
            //   service: 'travelInformationService',
            //   report: 'ReportRtpTravelInformation',
            //   db: 'rtp-thai-entry-exitdb',
            //   singleSearch: 'citizenCardNumber',
            //   countDb : 'normal'
            // },
            // trafficcase: {
            //   title: 'ฐานข้อมูลคดีจราจร',
            //   url: '/traffic-case/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-traffic-case.png',
            //   model: 'Dxc_Model_Rtp_TrafficCase',
            //   remark1: 'ทดสอบ',
            //   schema: 'rtp-traffic-case',
            //   schemaGroup: 'traffic-case',
            //   service: 'trafficCaseService',
            //   report: 'ReportRtpTrafficCase',
            //   db: 'rtp-traffic-casedb',
            //   singleSearch: 'citizenCardNumber',
            //   countDb : 'allgetion'
            // },
            // criminalrecord: {
            //   title: 'ฐานข้อมูลทะเบียนประวัติอาชญากร',
            //   url: '/criminal-record/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-criminal-record.png',
            //   model: 'Dxc_Model_Rtp_CriminalRecord',
            //   remark1: `การตรวจสอบนี้เป็นการตรวจสอบเบื้องต้น ไม่สามารถนำไปอ้างอิงเป็นหลักฐาน ซึ่งศูนย์แลกเปลี่ยนข้อมูล กระบวนการยุติธรรม ( Data Exchange Center ) 
            //   ต้องแจ้งให้เจ้าหน้าที่ผู้ปฏิบัติงานด้านกระบวนการยุติธรรมของศูนย์ แลกเปลี่ยนข้อมูลกระบวนการยุติธรรม ( Data Exchange Center) ได้ ทราบ 
            //   และหากต้องการเอกสารเพื่อนำไปอ้างอิงเป็นหลักฐานให้ทำหนังสือสอบถามมายัง กองทะเบียนประวัติอาชญากร สำนักงานพิสูจน์หลักฐานตำรวจ`,
            //   schema: 'rtp-criminal-record',
            //   schemaGroup: 'criminal-record',
            //   service: 'criminalRecordService',
            //   report: 'ReportRtpCriminalRecord',
            //   db: 'rtp-criminal-recorddb',
            //   singleSearch: 'idNo',
            //   // singleSearchFnameLname: 'FnameLname',
            //   countDb : 'allgetion'
            // },
            // warrantofarrest: {
            //   title: 'ฐานข้อมูลหมายจับ',
            //   url: '/rtp-arrest-warrant-current/search',
            //   img: 'assets/dist/img/dxc-img/symbol/datatype/32/rtp-warrant-of-arrest.png',
            //   model: 'Dxc_Model_Rtp_Warrant_Of_Arrest',
            //   remark1: 'ข้อมูลจากระบบเก่า และไม่มีการปรับปรุ่งแล้วตั้งแต่ พฤษภาคม 2556',
            //   schema: 'rtp-arrest-warrant-current',
            //   schemaGroup: 'arrest-warrant-current',
            //   service: 'warrantOfArrestService',
            //   report: 'ReportRtpWarrantOfArrest',
            //   db: 'rtp-arrest-warrant-currentdb',
            //   singleSearch: 'citizenCardNumber',
            //   countDb : 'allgetion'
            // },

          }]
        },
        // กรมพัฒนาธุรกิจการค้า
        dbd: {
          title: 'กรมพัฒนาธุรกิจการค้า',
          titleEn: 'dbd',
          url: '',
          img: 'assets/dist/img/dbd.png',
          sub: [{
            commercialregistrant: {
              title: 'ฐานข้อมูลนิติบุคคล',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dbd-commercial-registrant.png',
              model: 'Dxc_Model_Dbd_CommercialRegistrant',
              remark1: '',
              schema: 'dbd-commercial-registrant',
              schemaGroup: 'commercial-registrant',
              service: 'commercialRegistrantService',
              report: 'ReportDbdCommercialRegistrant',
              // db: 'dbd-commercial-registrantdb',
              // singleSearch: 'citizenCardNumber'
            },
          }]
        },
        // สำนักงานปลัดกระทรวงยุติธรรม ฐานข้อมูลกองทุนยุติธรรม
        jfo: {
          title: 'สำนักงานปลัดกระทรวงยุติธรรม',
          titleEn: 'jfo',
          url: '',
          img: 'assets/dist/img/jfo.png',
          sub: [{
            jfoCase: {
              title: 'ฐานข้อมูลกองทุนยุติธรรม',
              url: 'มีข้อมูลจนถึงปีงบประมาณ 2563',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rlpd-justice-fund.png',
              model: 'Dxc_Model_Jfo_Jfo_Case',
              remark1: 'มีข้อมูลจนถึงปีงบประมาณ 2563',
              schema: 'jfo-jfo-case',
              schemaGroup: 'jfo-case',
              service: 'jfoCaseService',
              report: 'ReportJfoJfoCase',
              db: 'jfo-jfo-casedb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            jfoCase64: {
              title: 'ฐานข้อมูลกองทุนยุติธรรม (2564)',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/rlpd-justice-fund.png',
              model: 'Dxc_Model_Jfo_Jfo_Case64',
              remark1: 'มีข้อมูลตั้งแต่ปีงบประมาณ 2564 เป็นต้นไป',
              schema: 'jfo-jfo-case64',
              schemaGroup: 'jfo-case64',
              service: 'jfoCase64Service',
              report: 'ReportJfoJfoCase64',
              db: 'jfo-jfo-case64db',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
          }]
        },
        // อัยการ
        agoth: {
          title: 'สำนักงานอัยการสูงสุด',
          titleEn: 'agoth',
          url: '',
          img: 'assets/dist/img/agoth.png',
          sub: [{
            attorneymaincases: {
              title: 'ฐานข้อมูลสำนวนหลัก',
              url: '/attorney-cases/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/attorney-cases.png',
              model: 'Dxc_Model_Agoth_AttorneyMainCases',
              remark1: '',
              schema: 'agoth-attorney-cases',
              schemaGroup: 'attorney-cases',
              service: 'attorneyCasesService',
              report: 'ReportAgothAttorneyCases',
              // db: 'agoth-attorney-casesdb',
              // singleSearch: 'citizenCardNumber'
            },
            charge: {
              title: 'ฐานข้อมูลข้อหาในตัวผู้ต้องหา/จำเลย',
              url: '/charge/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/charge.png',
              model: 'Dxc_Model_Agoth_Charge',
              remark1: '',
              schema: 'agoth-charge',
              schemaGroup: 'charge',
              service: 'chargeService',
              report: 'ReportAgothCharge',
              // db: 'agoth-chargedb',
              // singleSearch: 'citizenCardNumber'
            },
            incidentlocation: {
              title: 'ฐานข้อมูลสถานที่เกิดเหตุ',
              url: '/incident-location/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/incident-location.png',
              model: 'Dxc_Model_Agoth_IncidentLocation',
              remark1: '',
              schema: 'agoth-incident-location',
              schemaGroup: 'incident-location',
              service: 'incidentLocationService',
              report: 'ReportAgothIncidentLocation',
              // db: 'agoth-incident-locationdb',
              // singleSearch: 'citizenCardNumber'
            },
            chargeSubject: {
              title: 'ข้อมูลผู้ต้องหา/จำเลย',
              url: '/charge-subject/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/charge-subject.png',
              model: 'Dxc_Model_Agoth_ChargeSubject',
              remark1: '',
              schema: 'agoth-charge-subject',
              schemaGroup: 'charge-subject',
              service: 'chargeSubjectService',
              report: 'ReportAgothChargeSubject',
              db: 'agoth-charge-subjectdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'allgetion'
            },
            chargeVictim: {
              title: 'ฐานข้อมูลผู้เสียหาย',
              url: '/charge-victim/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/charge-victim.png',
              model: 'Dxc_Model_Agoth_ChargeVictim',
              remark1: '',
              schema: 'agoth-charge-victim',
              schemaGroup: 'charge-victim',
              service: 'chargeVictimService',
              report: 'ReportAgothChargeVictim',
              db: 'agoth-charge-victimdb',
              singleSearch: 'citizenCardNumber',
              singleSearchFnameLname: 'FnameLname',
              countDb : 'normal'
            },
            chargeVerdict: {
              title: 'ฐานข้อมูลคำพิพากษาในตัวผู้ต้องหา/จำเลย',
              url: '/charge-verdict/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/charge-verdict.png',
              model: 'Dxc_Model_Agoth_ChargeVerdict',
              remark1: '',
              schema: 'agoth-charge-verdict',
              schemaGroup: 'charge-verdict',
              service: 'chargeVerdictService',
              report: 'ReportAgothChargeVerdict',
              // db: 'agoth-charge-verdictdb',
              // singleSearch: 'citizenCardNumber'
            },
            attorneySubcase: {
              title: 'ฐานข้อมูลสำนวนย่อย',
              url: '/attorney-subcase/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/attorney-subcase.png',
              model: 'Dxc_Model_Agoth_AttorneySubcase',
              remark1: '',
              schema: 'agoth-attorney-subcase',
              schemaGroup: 'attorney-subcase',
              service: 'attorneySubcaseService',
              report: 'ReportAgothAttorneySubcase',
              // db: 'agoth-attorney-subcasedb',
              // singleSearch: 'citizenCardNumber'
            },
            caseProsecutionAttorneyOrder: {
              title: 'ฐานข้อมูลคำสั่งอัยการ',
              url: '/case-prosecution-attorney-order/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/case-prosecution-attorney-order.png',
              model: 'Dxc_Model_Agoth_Case_Prosecution_Attorney_Order',
              remark1: '',
              schema: 'agoth-case-prosecution-attorney-order',
              schemaGroup: 'case-prosecution-attorney-order',
              service: 'caseProsecutionAttorneyOrderService',
              report: 'ReportCaseProsecutionAttorneyOrder',
              // db: 'agoth-case-prosecution-attorney-orderdb',
              // singleSearch: 'citizenCardNumber'
            },
            caseProsecutionAttorney: {
              title: 'ฐานข้อมูลอัยการแต่ละสำนวน',
              url: '/case-prosecution-attorney/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/case-prosecution-attorney.png',
              model: 'Dxc_Model_Agoth_CaseProsecutionAttorney',
              remark1: '',
              schema: 'agoth-case-prosecution-attorney',
              schemaGroup: 'case-prosecution-attorney',
              service: 'caseProsecutionAttorneyService',
              report: 'ReportAgothCaseProsecutionAttorney',
              // db: 'agoth-case-prosecution-attorneydb',
              // singleSearch: 'citizenCardNumber'
            },
            directoryDimensionCase: {
              title: 'ฐานข้อมูลสารบบคดี (มิติคดี)',
              url: '/directory-dimension-case/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/directory-dimension-case.png',
              model: 'Dxc_Model_Idb_DirectoryDimensionCase',
              remark1: '',
              schema: 'agoth-directory-dimension-case',
              schemaGroup: 'directory-dimension-case',
              service: 'directoryDimensionCaseService',
              report: 'ReportIdbDirectoryDimensionCase',
              // db: 'idb-directory-dimension-casedb',
              // singleSearch: 'citizenCardNumber'
            },
            directoryDimensionPerson: {
              title: 'ฐานข้อมูลสารบบคดี (มิติคน)',
              url: '/directory-dimension-person/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/directory-dimension-person.png',
              model: 'Dxc_Model_Idb_DirectoryDimensionPerson',
              remark1: '',
              schema: 'agoth-directory-dimension-person',
              schemaGroup: 'directory-dimension-person',
              service: 'directoryDimensionPersonService',
              report: 'ReportIdbDirectoryDimensionPerson',
              // db: 'idb-directory-dimension-persondb',
              // singleSearch: 'citizenCardNumber'
            },
          }]
        },
        // กรมการจัดหางาน
        // doe: {
        //   title: 'กรมการจัดหางาน',
        //   titleEn: 'doe',
        //   url: '',
        //   img: 'assets/dist/img/doe.png',
        //   sub: [{
        //     alienworkforces: {
        //       title: 'ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม) (Linkage)',
        //       url: '/alienworkforces/search',
        //       img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-doe-alien-workforces.png',
        //       model: 'Dxc_Model_Doe_Moi_Alien_Workforces',
        //       remark1: 'ข้อมูลทดสอบ',
        //       schema: 'doe-moi-doe-alien-workforces',
        //       schemaGroup: 'moi-doe-alien-workforces',
        //       service: 'moiDoeAlienWorkforcesService',
        //       report: 'ReportDoeMoiAlienWorkforces',
        //       db: 'doe-moi-doe-alien-workforcesdb',
        //       singleSearch: 'citizenCardNumber'
        //     },
        //   }]
        // },
        // กรมการขนส่งทางบก
        dlt: {
          title: 'กรมการขนส่งทางบก',
          titleEn: 'dlt',
          url: '/dlt',
          img: 'assets/dist/img/dlt.png',
          sub: [{
            driverLicense: {
              title: 'ใบอนุญาตขับขี่',
              url: '/driver-license/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dlt-driver-license-new.png',
              model: 'Dxc_Model_Dlt_DriverLicenseNew',
              remark1: 'สืบค้นได้ในเวลาราชการ',
              schema: 'dlt-driver-license-new',
              schemaGroup: 'driver-license-new',
              service: 'driverlicenseService',
              report: 'ReportDltDriverLicense',
              db: 'dlt-driver-license-newdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            carLicense: {
              title: 'ทะเบียนยานพาหนะ',
              url: '/car-license/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/dlt-car-license.png',
              model: 'Dxc_Model_Dlt_CarLicenseNew',
              remark1: 'การสืบค้นด้วยหมายเลขบัตรประชาชน ท่านไม่จำเป็นต้องกรอกข้อมูลอื่นๆ แต่การสืบค้นด้วยหมายเลขทะเบียนรถ ท่านจำเป็นต้องกรอกข้อมูลจังหวัด  ตัวอักษรประจำหมวด หมายเลขทะเบียนรถ และประเภทรถ ให้ครบถ้วน',
              schema: 'dlt-car-license-new',
              schemaGroup: 'car-license-new',
              service: 'carlicenseService',
              report: 'ReportDltcarLicense',
              db: 'dlt-car-license-newdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            }
          }]
        },
        // สำนักงานประกันสังคม
        sso: {
          title: 'สำนักงานประกันสังคม',
          titleEn: 'sso',
          url: '/sso',
          img: 'assets/dist/img/sso.png',
          sub: [{
            employeeEmployment: {
              title: 'ผู้ประกันตน',
              url: 'employee-employment/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/sso-employee-employment.png',
              model: 'Dxc_Model_Sso_EmployeeEmployment',
              remark1: 'สืบค้นได้จากเลขประจำตัวประชาชนที่มีอยู่จริงเท่านั้น',
              schema: 'sso-employee-employment',
              schemaGroup: 'employee-employment',
              service: 'employeeemploymentService',
              report: 'ReportSsoEmployeeEmployment',
              db: 'sso-employee-employmentdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            employment: {
              title: 'ประวัติผู้จ้างงาน',
              url: 'employment/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/sso-employment.png',
              model: 'Dxc_Model_Sso_Employment',
              remark1: 'สืบค้นได้จากเลขประจำตัวประชาชนที่มีอยู่จริงเท่านั้น',
              schema: 'sso-employment',
              schemaGroup: 'employee-employment-detail',
              service: 'employmentService',
              report: 'ReportSsoEmployment',
              db: 'sso-employmentdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
            selectedhospital: {
              title: 'ข้อมูลเลือกสถานพยาบาล',
              url: 'selected-hospital/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/selected-hospital.png',
              model: 'Dxc_Model_Sso_Selected_Hospital',
              remark1: '',
              schema: 'sso-select-hospital',
              schemaGroup: 'selected-hospital',
              service: 'selectedHospitalService',
              report: 'ReportSsoSelectedHospital',
              // db: 'selected-hospitaldb',
              // singleSearch: 'citizenCardNumber',
              // countDb : 'normal'
            },
          }]
        },
        // ฐานข้อมูลบูรณาการ
        idb: {
          title: 'ฐานข้อมูลบูรณาการ',
          titleEn: 'idb',
          url: '/idb',
          img: 'assets/dist/img/idb.png',
          sub: [{
            releasedoffender: {
              title: 'ฐานข้อมูลบุคคลพ้นโทษ',
              url: '/releasedprisoners/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/released-offender.png',
              model: 'Dxc_Model_Doc_ReleasedOffender',
              remark1: 'ต้องเป็นผู้ที่ได้รับสิทธิการเข้าถึงข้อมูลของ กรมราชทัณฑ์ กรมคุมประพฤติ กรมพินิจและคุ้มครองเด็กและเยาวชน',
              schema: 'idb-released-offender',
              schemaGroup: 'released-prisoners',
              service: 'releasedOffenderService',
              report: 'ReportDocReleasedOffender',
              db: 'idb-released-offenderdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'allgetion'
            },
          }]
        },
        // กรมส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ
        dep: {
          title: 'กรมส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ',
          titleEn: 'dep',
          url: '/dep',
          img: 'assets/dist/img/dep.png',
          sub: [{
            cripple: {
              title: 'ฐานข้อมูลคนพิการ (Linkage)',
              url: '/cripple/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dep-cripple.png',
              model: 'Dxc_Model_Dep_Moi_Cripple',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dep-moi-dep-cripple',
              service: 'moiDepcrippleService',
              report: 'ReportMoiDepcripple',
              db: 'dep-moi-dep-crippledb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        // กรมการกงสุล
        dca: {
          title: 'กรมการกงสุล',
          titleEn: 'dca',
          url: '/dca',
          img: 'assets/dist/img/dca.png',
          sub: [{
            thailandPassport: {
              title: 'ฐานข้อมูลหนังสือเดินทางประเทศไทย (Linkage)',
              url: '/thailand-passport/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-dca-thailand-passport.png',
              model: 'Dxc_Model_Dca_Moi_Thailand_Passport',
              remark1: `ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน`,
              schema: 'dca-thailand-passport',
              service: 'moiMfaThailandPassporService',
              report: 'ReportMoiMfaThailandPassport',
              db: 'dca-thailand-passportdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'normal'
            },
          }]
        },
        // สำนักงานศาลยุติธรรมฯ
        coj: {
          title: 'สำนักงานศาลยุติธรรม',
          titleEn: 'coj',
          url: '/coj',
          img: 'assets/dist/img/coj.png',
          sub: [{
            cojArrestWarrants: {
              title: 'ฐานข้อมูลหมายจับศาล',
              url: '/arrest-warrants/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/coj-arrest-warrants.png',
              model: 'Dxc_Model_Coj_ArrestWarrants',
              remark1: `มีข้อมูลตั้งแต่วันที่ 1 มกราคม 2562 ถึงปัจจุบัน`,
              schema: 'coj-arrest-warrants',
              service: 'cojArrestWarrantsService',
              report: 'ReportCojArrestWarrants',
              db: 'coj-arrest-warrantsdb',
              singleSearch: 'citizenCardNumber',
              countDb : 'allgetion'
            },
            judgementSummarys: {
              title: 'ฐานข้อมูลคำพิพากษาอย่างย่อ',
              url: '/judgement-summarys/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/coj-judgement-summarys.png',
              model: 'Dxc_Model_Coj_JudgementSummarys',
              remark1: `หมายเลขคดีดำตัวแรกขึ้นต้นด้วยพยัญชนะ ไม่มีจุด และไม่เว้นวรรค`,
              schema: 'coj-judgement-summary',
              service: 'cojJudgementSummarysService',
              report: 'ReportCojJudgementSummarys',
              // db: 'cojJudgementSummarysdb',
              // singleSearch: 'citizenCardNumber'
            },
            judgement: {
              title: 'ฐานข้อมูลคำพิพากษาฉบับเต็ม',
              url: '/judgement/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/coj-judgement.png',
              model: 'Dxc_Model_Coj_Judgement',
              remark1: `มีข้อมูลตั้งแต่ปี พ.ศ.2559 จนถึงปัจจุบัน *เนื่องจากไฟล์คำพิพากษาฉบับเต็มมีขนาดใหญ่ อาจใช้เวลาในการดาวน์โหลด`,
              schema: 'coj-judgement',
              service: 'cojJudgementService',
              report: 'ReportCojJudgement',
              // db: 'cojJudgementSummarysdb',
              // singleSearch: 'citizenCardNumber'
            },
          }]
        },
        rd: {
          title: 'กรมสรรพากร',
          titleEn: 'rd',
          url: '',
          img: 'assets/dist/img/rd.png',
          sub: [{
            registeroftaxpayers: {
              title: 'ฐานข้อมูลทะเบียนผู้เสียภาษี (Linkage)',
              url: '/registeroftaxpayers/search',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/mof-register-of-taxpayers.png',
              model: 'Dxc_Model_Mof_register_Of_Taxpayers',
              remark1: 'ต้องใช้ Smart card เพื่อยืนยันตัวบุคคลก่อนใช้งาน และสามารถค้นด้วยเลขที่กรมสรรพากรออก (ขึ้นต้นด้วย 099) เท่านั้น',
              schema: 'rd-moi-rd-register-of-taxpayers',
              schemaGroup: 'register-of-taxpayers',
              service: 'registerOfTaxpayersService',
              report: 'ReportMofRegisterOfTaxpayers',
              // db: 'mof-register-of-taxpayersdb',
              // singleSearch: 'citizenCardNumber',
              // countDb : 'normal'
            },
          }]
        },
        //สำนักงานปลัดกระทรวงศึกษาธิการ
        moe: {
          title: 'สำนักงานปลัดกระทรวงศึกษาธิการ',
          titleEn: 'moe',
          url: '',
          img: 'assets/dist/img/moe.png',
          sub: [{
            students: {
              title: 'ฐานข้อมูลนักเรียน (Linkage2)',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-moe-students.png',
              model: 'Dxc_Model_Moi_Moe_Students',
              remark1: `ข้อมูลทดสอบ`,
              schema: 'moe-moi-moe-students',
              schemaGroup: 'moi-moe-students',
              service: 'moiMoeStudentsService',
              report: 'ReportMoeStudents',
              db: 'moe-moi-moe-studentsdb',
              singleSearch: 'citizenCardNumber'
            },
            graduates: {
              title: 'ฐานข้อมูลผู้สำเร็จการศึกษา (Linkage2)',
              url: '',
              img: 'assets/dist/img/dxc-img/symbol/datatype/32/moi-moe-graduates.png',
              model: 'Dxc_Model_Moi_Moe_Graduates',
              remark1: `ข้อมูลทดสอบ`,
              schema: 'moe-moi-moe-graduates',
              schemaGroup: 'moi-moe-graduates',
              service: 'moiMoeGraduatesService',
              report: 'ReportMoeGraduates',
              db: 'moe-moi-moe-graduatesdb',
              singleSearch: 'citizenCardNumber'
            },
          }]
        }
      }
    ]
  },


  // กรมปกครอง
  Dxc_Model_Dopa_Citizen: [{
    'source': 'Dopa',
    'data': 'citizen',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/dopa/persons',
      // 'production': '/api/v2/dopa/persons',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },
    'props': [
      {
        'id': ['id', 'number', 'รหัสข้อมูล', { 'pk': 'true' }],
        'citizenCardNumber': ['citizenCardNumber', 'number', 'เลขประจำตัวประชาชน'],
        'prefix': ['prefix', 'title[50]', 'คำนำหน้าชื่อ'],
        'firstName': ['firstName', 'string', 'ชื่อ'],
        'lastName': ['lastName', 'string', 'นามสกุล'],
        'sex': ['sex', 'string', 'เพศ'],
        'dateOfBirth': ['dateOfBirth', 'datetime', 'วันเกิด'],
        'age': ['age', 'number', 'อายุ'],
        'nationality': ['nationality', 'string', 'สัญชาติ'],
        'homeAddress': ['homeAddress', 'string', 'ที่อยู่'],
        'homeNumber': ['homeNumber', 'string', 'บ้านเลขที่'],
        'homeMoo': ['homeMoo', 'string', 'หมู่'],
        'homeTrock': ['homeTrock', 'string', 'ตรอก'],
        'homeSoy': ['homeSoy', 'string', 'ซอย'],
        'homeRoad': ['homeRoad', 'string', 'ถนน'],
        'homeTumbon': ['homeTumbon', 'string', 'ตำบล'],
        'homeAmphur': ['homeAmphur', 'string', 'อำเภอ'],
        'homeProvince': ['homeProvince', 'string', 'จังหวัด'],
        'homeStatus': ['homeStatus', 'string', 'สถานะบ้าน'],
        'inhabitantStatus': ['inhabitantStatus', 'string', 'สถานะผู้อาศัย'],
        'homeMoveInDate': ['homeMoveInDate', 'datetime', 'วันที่ย้ายเข้า'],
        'homeOwnedStatus': ['homeOwnedStatus', 'number', 'สถานะ[เจ้าบ้าน,ผู้อาศัย]'],
        'fatherCitizenCardNumber': ['fatherCitizenCardNumber', 'string', 'เลขประจำตัวประชาชนของบิดา'],
        'fatherFullName': ['fatherFullName', 'string', 'ชื่อบิดา'],
        'fatherNationality': ['fatherNationality', 'string', 'สัญชาติบิดา'],
        'motherCitizenCardNumber': ['motherCitizenCardNumber', 'string', 'เลขประจำตัวประชาชนของมารดา'],
        'motherFullName': ['motherFullName', 'string', 'ชื่อมารดา'],
        'motherNationality': ['motherNationality', 'string', 'สัญชาติมารดา'],
        'changeNames': ['changeName', '', 'ผู้ครอบครอง'],
        'changeNameCount': ['changeNameCount', 'number', 'ครั้งที่เปลี่ยน'],
        'changeNameType': ['changeNameType', 'number', 'ประเภทการเปลี่ยน'],
        'changeNameDate': ['changeNameDate', 'datetime', 'วันที่เปลี่ยน'],
        'changeNameFrom': ['changeNameFrom', 'string', 'เปลี่ยนจาก'],
        'changeNameTo': ['changeNameTo', 'string', 'เปลี่ยนเป็น'],
        'changeNamePlace': ['changeNamePlace', 'string', 'เปลียนที่'],
        'personalStatus': ['personalStatus', 'string', 'สถานะการมีชีวิต'],
        'image': ['image', 'string', 'image'],
        'updateDateTime': ['updateDateTime', 'datetime', 'วันที่แก้ไขข้อมูล'],
        'dataSubmitDate': ['dataSubmitDate', 'datetime', 'วันที่บันทึกข้อมูล']
      }],
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength' : '13'},
      { 'title': 'ชื่อ', 'name': 'firstName' },
      { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'list': [
      {
        'cells': [
          { 'id': 'citizenCardNumber' },
          { 'id': 'firstName' },
          { 'id': 'lastName' },
          { 'id': 'sex' },
          { 'id': 'dateOfBirth' },
          { 'id': 'nationality' },
          { 'id': 'prisonName' },
          { 'id': 'allegation' },
          { 'id': 'sentenceDate' },
          { 'id': 'releaseDate' }
        ]
      }
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'sex', 'title': 'เพศ', 'align': 'center', 'width': '70px' },
        { 'id': 'dateOfBirth', 'title': 'วัน/เดือน/ปี เกิด', 'width': '100px', 'align': 'center' },
        { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ฐานทะเบียนราษฎร (Linkage)
  Dxc_Model_Dopa_Moi_Persons: [{
    'source': 'dopa',
    'data': 'persons',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': '',
    'url': {
      'production': '/api/qm/v2/dopa/dopa-persons',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขบัตรประชาชน ', 'width': '30%', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '20%', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'align': 'center', 'width': '20%' },
        { 'id': 'genderDesc', 'title': 'เพศ', 'width': '100px', 'align': 'center' },
        // { 'id': 'dateOfBirth', 'title': 'วันเกิด', 'width': '100px', 'align': 'center' },
        { 'id': 'nationalityDesc', 'title': 'สัญชาติ', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ฐานข้อมูลบัตรประจำตัวประชาชน
  Dxc_Model_Moi_Dopa_ThaiIdcard: [{
    'source': 'Dopa',
    'data': 'thaiidcard',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/dopa/thai-id-cards',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'firstName' },
      // { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'nameTHFirstName', 'title': 'ชื่อตัว (ภาษาไทย)', 'width': '150px', 'align': 'left' },
        { 'id': 'nameTHLastName', 'title': 'ชื่อสกุล (ภาษาไทย)', 'width': '150px', 'align': 'left' },
        { 'id': 'sex', 'title': 'เพศ', 'align': 'center', 'width': '70px' },
        { 'id': 'issueDate', 'title': 'วันเดือนปี ที่ออกบัตร', 'width': '100px', 'align': 'center' },
        // { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ฐานข้อมูลฐานข้อมูลทะเบียนบ้าน (บุคคลทุกประเภท) moi-dopa-addresses
  Dxc_Model_Dopa_Moi_Addresses: [{
    'source': 'Dopa',
    'data': 'addresses',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/addresses',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'rcodeCode', 'title': 'เลขรหัสสำนักทะเบียน', 'width': '120px', 'align': 'center' },
        { 'id': 'rcodeDesc', 'title': 'ชื่อสำนักทะเบียน', 'align': 'center', 'width': '70px' },
        { 'id': 'houseNo', 'title': 'บ้านเลขที่ ', 'width': '150px', 'align': 'left' },
        { 'id': 'houseTypeDesc', 'title': 'ประเภทบ้าน', 'width': '150px', 'align': 'left' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],
  // ฐานข้อมูลใบสูติบัตร
  Dxc_Model_Moi_Dopa_Birth_Certificates: [{
    'source': 'Dopa',
    'data': 'birthcertificates',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/birth-certificates',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
      // { 'title': 'ชื่อ', 'name': 'firstName' },
      // { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'gender', 'title': 'เพศ', 'align': 'center', 'width': '70px' },
        { 'id': 'hospitalName', 'title': 'ชื่อโรงพยาบาล', 'width': '100px', 'align': 'center' },
        // { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // คดีประมงผิดกฎหมาย Dxc_Model_Moac_Fisheries_Illegal
  Dxc_Model_Moi_Moac_Fisheries_Illegal: [{
    'source': 'Moac',
    'data': 'fisheriesillegal',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/moac/fisheries-illegal-fishing-cases'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseId', 'title': 'เลขคดีอาญา ', 'width': '150px', 'align': 'left' },
        { 'id': 'policeStation', 'title': 'ชื่อสถานีตำรวจ', 'width': '150px', 'align': 'left' },
        { 'id': 'provincialDivision', 'title': 'ชื่อจังหวัดของสถานีตำรวจ', 'align': 'center', 'width': '70px' },
        { 'id': 'year', 'title': 'ปี พ.ศ. ของคดีอาญา', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลทะเบียนบุคคลต่างด้าว
  Dxc_Model_Dopa_Moi_Aliens: [{
    'source': 'Dopa',
    'data': 'aliens',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/aliens',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'firstName' },
      // { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'titleDesc', 'title': 'คำนำหน้านาม', 'align': 'center', 'width': '70px' },
        { 'id': 'firstName', 'title': 'ชื่อตัว ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'ชื่อสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'nationalityDesc', 'title': 'สัญชาติ', 'width': '100px', 'align': 'center' },
        // { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลผู้ขอออกหนังสือผ่านแดนทั้งหมด
  Dxc_Model_Moi_Dopa_Border_Passes: [{
    'source': 'Dopa',
    'data': 'borderpasses',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/border-passes',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'bookNo', 'title': 'เลขที่เล่มหนังสือผ่านแดน', 'width': '150px', 'align': 'left' },
        { 'id': 'thaiName', 'title': 'ชื่อตัว-ชื่อสกุล ภาษาไทย', 'width': '150px', 'align': 'left' },
        { 'id': 'genderText', 'title': 'เพศ', 'align': 'center', 'width': '70px' },
        { 'id': 'occupation', 'title': 'อาชีพ', 'width': '100px', 'align': 'center' },
        // { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลใบมรณบัตร
  Dxc_Model_Dopa_Moi_Death_Certificates: [{
    'source': 'Dopa',
    'data': 'deathcertificates',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/death-certificates',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'firstName' },
      // { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'documentNo', 'title': 'เลขที่เอกสาร ', 'width': '150px', 'align': 'left' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'ชื่อสกุล', 'align': 'center', 'width': '70px' },
        { 'id': 'genderDesc', 'title': 'เพศ', 'width': '100px', 'align': 'center' },
        { 'id': 'dateOfNotifying', 'title': 'วันที่แจ้งตาย (วันเดือนปี)', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลทะเบียนหย่า
  Dxc_Model_Dopa_Moi_Divorce_Certificates: [{
    'source': 'Dopa',
    'data': 'divorcecertificates',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/divorce-certificates',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'firstName' },
      // { 'title': 'นามสกุล', 'name': 'lastName' }
    ],
    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'divorceID', 'title': 'เลขทะเบียนจดทะเบียนการหย่า ', 'width': '150px', 'align': 'left' },
        { 'id': 'divorcePlaceDesc', 'title': 'สนท.ที่จดทะเบียนหย่า', 'width': '150px', 'align': 'left' },
        { 'id': 'divorcePlaceProvince', 'title': 'จังหวัดที่จดทะเบียนการหย่า', 'align': 'center', 'width': '70px' },
        { 'id': 'divorceDate', 'title': 'วันเดือนปีที่จดทะเบียนการหย่า', 'width': '100px', 'align': 'center' },
        // { 'id': 'nationality', 'title': 'สัญชาติ', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลวุฒิการศึกษา (2556) สำนักปลัดกระทรวงศึกษาธิการ
  Dxc_Model_Moi_Dopa_Education_Backgroundes: [{
    'source': 'Dopa',
    'data': 'educationbackgroundes',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/dopa/education-backgrounds',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'degree1', 'title': 'ระดับการศึกษา', 'width': '150px', 'align': 'left' },
        { 'id': 'faculty1', 'title': 'ชื่อย่อย ประเภทวิชา/ปริญญา', 'width': '150px', 'align': 'left' },
        { 'id': 'graduate1', 'title': 'ชื่อสถานศึกษาที่เรียนจบ', 'align': 'center', 'width': '70px' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลทะเบียนสมรส
  Dxc_Model_Moi_Dopa_Marriage_Certificates: [{
    'source': 'Dopa',
    'data': 'marriagecertificates',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/marriage-certificates',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'marryDate', 'title': 'วันเดือนปีที่จดทะเบียนสมรส', 'width': '150px', 'align': 'left' },
        { 'id': 'marryID', 'title': 'เลขทะเบียนในการจดทะเบียนสมรส', 'width': '150px', 'align': 'left' },
        { 'id': 'marryPlaceDesc', 'title': 'สนท.ที่จดทะเบียนสมรส', 'align': 'center', 'width': '70px' },
        { 'id': 'marryPlaceProvince', 'title': 'จังหวัดที่จดทะเบียนสมรส', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลรายการประวัติหนังสือเดินทาง กรมการกงสุล
  Dxc_Model_Moi_Dopa_Passports: [{
    'source': 'Dopa',
    'data': 'passports',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/moi-linkage/persons',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'firstNameTh', 'title': 'ชื่อผู้ถือหนังสือเดินทาง(ไทย)', 'width': '150px', 'align': 'center' },
        { 'id': 'issueDate', 'title': 'วันที่หมดอายุหนังสือเดินทาง', 'width': '150px', 'align': 'center' },
        { 'id': 'passportNo', 'title': 'หมายเลขหนังสือเดินทาง', 'align': 'center', 'width': '150px' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],
  // ข้อมูลภาพใบหน้า
  Dxc_Model_Dopa_Moi_Face_Photos: [{
    'source': 'Dopa',
    'data': 'facephotos',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/person-face-photos',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ฐานข้อมูลการพัฒนาฝีมือแรงงาน
  Dxc_Model_Dsd_Moi_Workforce_Developments: [{
    'source': 'dsd',
    'data': 'workforcedevelopments',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dsd/workforce-developments',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '150px', 'align': 'left' },
        { 'id': 'names', 'title': 'ชื่อ-นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'typeOfTrain', 'title': 'ประเภทของการพัฒนาฝีมือแรงงาน', 'width': '150px', 'align': 'left' },
        { 'id': 'site', 'title': 'หน่วยงานที่ออกหนังสือรับรอง/วุฒิบัตร', 'width': '150px', 'align': 'left' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลสิทธิประกันสุขภาพและการลงทะเบียนกับหน่วยบริการ
  Dxc_Model_Nhso_Moi_Health_Insurance_Rights: [{
    'source': 'nhso',
    'data': 'healthinsurancerights',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/nhso/health-insurance-rights',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },

    ],
    'grid': [{
      'cells': [
        { 'id': 'personId', 'title': 'เลขบัตรประชาชน ', 'width': '150px', 'align': 'left' },
        { 'id': 'hmainName', 'title': 'ชื่อหน่วยบริการที่รับการส่งต่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'maininsclName', 'title': 'ชื่อสิทธิหลักในการบริการ', 'align': 'center', 'width': '70px' },
        { 'id': 'startdate', 'title': 'วันเริ่มใช้สิทธิ', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // ข้อมูลผู้ถูกกล่าวหา คดีด้านการทุจริต
  Dxc_Model_Nacc_Moi_Corruption_Accuseds: [{
    'source': 'nacc',
    'data': 'corruptionaccuseds',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/nacc/corruption-accuseds',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },


    ],
    'grid': [{
      'cells': [
        { 'id': 'name', 'title': 'ชื่อ ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastname', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'positionName', 'title': 'ตำแหน่งที่ถูกกล่าวหา', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // สำนักงานคณะกรรมการป้องกันและปราบปรามยาเสพติด
  Dxc_Model_Oncb_NarcoticOffender: [{
    'source': 'Oncb',
    'data': 'narcoticOffender',
    'uniqFields': ['citizenCardNumber', 'oncbCaseId', 'pid', 'narcoticName'],
    'eventFields': ['arrestDate', 'reportedYear'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/oncb/narcotic-offender',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=10&sortDirection=ASC',
      'searchByfirstName': '?userNin=1234&size=10&sortDirection=ASC',
      'searchBylastName': '?userNin=1234&size=10&sortDirection=ASC',
      'searchByreportedYear': '?userNin=1234&size=10&sortDirection=ASC'
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ปีรายงาน', 'name': 'reportedYear','maxlength': '4', 'pattern':'[0-9]{4}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],

    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'allegation', 'title': 'ข้อหา', 'width': '150px', 'align': 'left' },
        { 'id': 'narcoticName', 'title': 'ชื่อยาเสพติด', 'align': 'center', 'width': '70px' },
        { 'id': 'reportedYear', 'title': 'ปีรายงาน', 'width': '100px', 'align': 'center' },


      ],
      'widths': '[100,100,70,70,70,200,100,100]'
    }]
  }
  ],


  // กรมคุมประพฤติ
  Dxc_Model_Dop_Probationer: [{
    'source': 'Dop',
    'data': 'probationer',
    'uniqFields': ['citizenCardNumber', 'officeId', 'caseRegistrationYear', 'caseRegistrationNumber'],
    'eventFields': ['probationStartDate', 'probationPlannedEndDate', 'caseRegistrationYear'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/dop/probationers'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByCaseRegistrationYear': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ปีทะเบียน', 'name': 'caseRegistrationYear','maxlength': '4', 'pattern':'[0-9]{4}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],
    'list': [
      {
        'cells': [
          { 'id': 'citizenCardNumber' },
          { 'id': 'prefix' },
          { 'id': 'sex' },
          { 'id': 'birthDateSrc' },
          { 'id': 'firstName' },
          { 'id': 'lastName' },
          { 'id': 'predicateOffence' },
          { 'id': 'narcoticName' },
          { 'id': 'probationStartDateSrc' },
          { 'id': 'probationPlannedEndDateSrc' },
          { 'id': 'probationActualEndDateSrc' },
          { 'id': 'caseRegistrationYear' },
          { 'id': 'probationStatus' },

        ]
      }
    ],

    'grid': [{
      'cells': [
        { 'id': 'caseRegistrationNumber', 'title': 'รหัส', 'width': '120px', 'align': 'center' },
        { 'id': 'caseRegistrationYear', 'title': 'ปี', 'width': '120px', 'align': 'center' },
        { 'id': 'officeName', 'title': 'สำนักงาน', 'width': '150px', 'align': 'left' },
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '150px', 'align': 'left' },
        { 'id': 'caseName', 'title': 'ชื่อตามฟ้อง', 'align': 'center', 'width': '70px' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '100px', 'align': 'center' },
        { 'id': 'birthDateSrc', 'title': 'วันเกิด', 'width': '100px', 'align': 'center' },
        { 'id': 'probationStatus', 'title': 'สถานะ', 'width': '100px', 'align': 'center' },
        { 'id': 'probationStartDateSrc', 'title': 'สั่งคุมประพฤติ', 'width': '100px', 'align': 'center' },
        { 'id': 'probationPlannedEndDateSrc', 'title': 'ครบกำหนด', 'width': '100px', 'align': 'center' },


      ],
      'widths': '[100,100,200,100,200,200,200,200]'
    }]
  }
  ],

  // กรมพินิจและคุ้มครองเด็กและเยาวชน
  Dxc_Model_Djop_JuvenileOffender: [{
    'source': 'Djop',
    'data': 'juvenileOffender',
    'uniqFields': ['citizenCardNumber', 'trainingUnitName', 'unitName'],
    'eventFields': ['receiveDate', 'releaseDate', 'eventDate'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/djop/juvenile-offenders'

    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByfirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },

    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '150px', 'align': 'left' },
        { 'id': 'unitName', 'title': 'สถานพินิจ', 'align': 'center', 'width': '70px' },
        { 'id': 'caseYear', 'title': 'ปีรายงาน', 'width': '100px', 'align': 'center' }

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }
  ],
  // ราชทัณฑ์ Service Json
  Dxc_Model_Doc_Prisoner: [{
    'source': 'Doc',
    'data': 'prisoner',
    'uniqFields': ['prisonerId', 'citizenCardNumber', 'policeCaseId'],
    'eventFields': ['sentenceDate', 'releaseDate'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/doc/prisoners'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByPrisonerName': '?userNin=1234&size=100&sortDirection=ASC',

    },
    'props': [
      {
        'id': ['id', 'number', 'รหัสข้อมูล', { 'pk': 'true' }],
        'addressAmphurText': ['addressAmphurText', 'string', 'อำเภอ [ปัจจุบัน]'],
        'addressMooBanText': ['addressMooBanText', 'string', 'หมู่บ้าน [ปัจจุบัน]'],
        'addressMooText': ['addressMooText', 'string', 'หมู่ [ปัจจุบัน]'],
        'addressNoText': ['addressNoText', 'string', 'บ้านเลขที่ [ที่อยู่ปัจจุบัน]'],
        'addressPostCode': ['addressPostCode', 'string', 'จังหวัด [ปัจจุบัน]'],
        'addressProvinceText': ['addressProvinceText', 'string', 'จังหวัด [ปัจจุบัน]'],
        'addressRoadText': ['addressRoadText', 'string', 'ถนน [ปัจจุบัน]'],
        'addressSoiText': ['addressSoiText', 'string', 'ซอย [ปัจจุบัน]'],
        'addressTumbonText': ['addressTumbonText', 'string', 'ตำบล [ปัจจุบัน]'],
        'allegation': ['allegation', 'string', 'โทษฐาน'],
        'amountOfTimesBreakDiscipline': ['amountOfTimesBreakDiscipline  ', 'string', 'จำนวนครั้งที่เคยทำผิดวินัย'],
        'citizenCardNumber': ['citizenCardNumber', 'string', 'เลขประจำตัวประชาชน'],
        'dataId': ['dataId', 'string', 'รหัสข้อมูล'],
        'dataSource': ['dataSource', 'string', 'แหล่งข้อมูล'],
        'dataSubmitDate': ['dataSubmitDate', 'string', 'วันที่ปรับปรุงข้อมูล'],
        'dateOfBirth': ['dateOfBirth', 'string', ' วันเดือนปีเกิด'],
        'decidedCaseId': ['decidedCaseId', 'string', 'เลขคดีแดง'],
        'educationLevel': ['educationLevel', 'string', 'ระดับการศึกษา'],
        'educationProvince': ['educationProvince', 'string', 'จังหวัดที่ตั้งของโรงเรียน'],
        'educationSchool': ['educationSchool', 'string', 'สถานศึกษา'],
        'fatherFirstName': ['fatherFirstName', 'string', 'ชื่อบิดา'],
        'fatherLastName': ['fatherLastName', 'string', 'สกุลบิดา'],
        'fatherPrefix': ['fatherPrefix', 'string', 'คำนำหน้าชื่อบิดา'],
        'firstName': ['firstName', 'string', 'ชื่อ'],
        'imposeTypeCode': ['imposeTypeCode', 'string', 'รหัสผลของคำสั่งศาล[จากต้นทาง] '],
        'judgement': ['judgement', 'string', 'ผลของคำสั่งศาล'],
        'lastName': ['lastName', 'string', 'สกุล'],
        'motherFirstName': ['motherFirstName', 'string', 'ชื่อมารดา'],
        'motherLastName': ['motherLastName', 'string', 'สกุลมารดา'],
        'motherPrefix': ['motherPrefix', 'string', 'คำนำหน้าชื่อมารดา'],
        'nationality': ['nationality', 'string', 'สัญชาติ'],
        'nationalityCode': ['nationalityCode', 'string', 'รหัสสัญชาติ[จากต้นทาง]'],
        'policeCaseId': ['policeCaseId', 'string', 'เลขคดีตำรวจ'],
        'prisonCode': ['prisonCode', 'string', 'รหัสเรือนจำ[จากต้นทาง]'],
        'prisonName': ['prisonName', 'string', 'เรือนจำ'],
        'prisonerId': ['prisonerId', 'string', 'เลขที่นักโทษ'],
        'receiveDate': ['receiveDate', 'string', 'วันที่รับตัว'],
        'releaseDate': ['releaseDate', 'string', 'วันที่ปล่อย'],
        'religious': ['religious', 'string', 'ศาสนา'],
        'religiousCode': ['religiousCode', 'string', 'รหัสศาสนา[จากต้นทาง]'],
        'sentenceDate': ['sentenceDate', 'string', 'วันที่ได้รับโทษ'],
        'sex': ['sex', 'string', 'เพศ'],
        'sexCode': ['sexCode', 'string', 'รหัสเพศ[จากต้นทาง]'],
        'undecidedCaseId': ['undecidedCaseId', 'string', 'เลขคดีดำ'],
      }],
      'basicSearch': [
        { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
        { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
        { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
        { 'title': 'โทษฐาน', 'name': 'allegation', 'class': 'autocomplete', 'source': 'prison', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
        { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
      ],
    'list': [
      {
        'cells': [
          { 'id': 'citizenCardNumber' },
          { 'id': 'firstName' },
          { 'id': 'lastName' },
          { 'id': 'sex' },
          { 'id': 'dateOfBirth' },
          { 'id': 'nationality' },
          { 'id': 'prisonName' },
          { 'id': 'allegation' },
          { 'id': 'sentenceDate' },
          { 'id': 'releaseDate' }
        ]
      }
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'prisonerId', 'title': 'เลขผู้ต้องขัง', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'undecidedCaseId', 'title': 'เลขคดีดำ', 'align': 'center', 'width': '70px' },
        { 'id': 'allegation', 'title': 'โทษฐาน', 'width': '100px', 'align': 'center' },
        { 'id': 'sentenceDate', 'title': 'วันที่ได้รับโทษ', 'width': '70px', 'align': 'center' },
        { 'id': 'releaseDate', 'title': 'วันปล่อยตัว', 'width': '100px', 'align': 'center' },
        { 'id': 'prisonName', 'title': 'เรือนจำ', 'width': '100px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // อายัดตัวผู้ต้องขัง
  Dxc_Model_Doc_Reg_seize: [{
    'source': 'Doc',
    'data': 'regseize',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/doc/reg-seizes',

    },
    'queryPattern': {
      'searchByCitizenNumber': '&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'firstname' },
      // { 'title': 'นามสกุล', 'name': 'lastname' },

    ],

    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstname', 'title': 'ชื่อผู้ถูกอายัด', 'width': '120px', 'align': 'center' },
        { 'id': 'lastname', 'title': 'นามสกุลผู้ถูกอายัด', 'width': '150px', 'align': 'left' },
        { 'id': 'seizeCaseDate', 'title': 'ลงวันที่ตามศาลสั่ง', 'width': '150px', 'align': 'left' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }
  ],

  // กรมคุ้มครองสิทธิและเสรีภาพ
  Dxc_Model_Rlpd_Requestors: [{
    'source': 'rlpd',
    'data': 'requestors',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/am/api/rlpd/complainants'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'personNationalIdentificationId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'personGivenName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'personSurName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'firstNameLastName', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseId', 'title': 'เลขคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'personNationalIdentificationId', 'title': 'เลขประจำตัวฯ-ผู้ร้อง', 'width': '120px', 'align': 'center' },
        { 'id': 'personGivenName', 'title': 'ชื่อ-ผู้ร้อง', 'width': '120px', 'align': 'center' },
        { 'id': 'personSurName', 'title': 'นามสกุล-ผู้ร้อง', 'width': '150px', 'align': 'left' },
        { 'id': 'personSex', 'title': 'เพศ', 'width': '150px', 'align': 'left' },
        { 'id': 'personBirthDate', 'title': 'เกิดวันที่', 'width': '120px', 'align': 'center' },
        { 'id': 'entryDate', 'title': 'วันรับเรื่อง', 'width': '120px', 'align': 'center' }
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  Dxc_Model_Rlpd_CrimeDefendantCompensation: [{
    'source': 'rlpd',
    'data': 'crime-defendant-compensation',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/rlpd/crime-defendant-compensation'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขคดี', 'name': 'caseId', 'pattern':'^[0-9]+$' },
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'dftCitizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ-สกุล', 'name': 'dftAttorneyFullName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseId', 'title': 'เลขคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'dftCitizenId', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'dftAttorneyFullName', 'title': 'ชื่อ-สกุล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  Dxc_Model_Rlpd_CrimeVictimCompensation: [{
    'source': 'rlpd',
    'data': 'crime-victim-compensation',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/rlpd/crime-victim-compensation'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขคดี', 'name': 'caseId', 'pattern':'^[0-9/]{2,20}' },
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'victimCitizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ-สกุล', 'name': 'victimAttorneyFullName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseId', 'title': 'เลขคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'victimCitizenId', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'victimAttorneyFullName', 'title': 'ชื่อ-สกุล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // สำนักงานป้องกันและปราบปรามการฟอกเงิน
  Dxc_Model_Amlo_Moneylaunderingcase: [{
    'source': 'almo',
    'data': 'money-laundering-case',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/almo/money-laundering-case'

    },
    'queryPattern': {
      'searchByCASEDATAID': '?casedataid=1&page=0&size=100&sortDirection=ASC',
      'searchByCASELASTNAME': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'ชื่อคดีตามฟ้อง', 'name': 'caseName' }
    ],

    'grid': [{
      'cells': [
        { 'id': 'caseDataId', 'title': 'เลขที่คดี', 'width': '120px', 'align': 'center' },
        { 'id': 'caseName', 'title': 'ชื่อคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'caseLastName', 'title': 'ชื่อผู้ต้องหา/นามสกุล/ชื่อฉายา/ผู้รวมกระทำผิด', 'width': '120px', 'align': 'center' },
        { 'id': 'basisTypeName', 'title': 'ความผิดมูลฐาน', 'width': '120px', 'align': 'center' },
        { 'id': 'caseDate', 'title': 'วันที่ของคดี', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // กรมบังคับคดี
  Dxc_Model_Led_BankruptcyCase: [{
    'source': 'led',
    'data': 'bankruptcy-case',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/led/bankruptcy-case',
      'development': 'http://127.0.0.1:8082/api/v1/led/bankruptcy-case'

    },
    'queryPattern': {
      'searchByDEFENDANTNAME': '?defendantname=1&page=0&size=100&sortDirection=ASC',
      'searchByDEFENDANTSURNAME': '?defendantSurname=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'defendantId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'defendantName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'defendantSurname', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fNameLName', 'type': 'hidden' },
    ],

    'grid': [{
      'cells': [
        { 'id': 'defendantId', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'defendantAbbriviationName', 'title': 'คำนำหน้าชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'defendantName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'defendantSurname', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'writPlaintiffName', 'title': 'ชื่อโจทก์(หน้าหมาย)', 'width': '120px', 'align': 'center' },
        { 'id': 'writDefendantName', 'title': 'ชื่อจำเลย(หน้าหมาย)', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // กระทรวงการคลัง
  Dxc_Model_Mof_Registrant: [{
    'source': 'mof',
    'data': 'registrant',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/mof/registrant',

    },
    'queryPattern': {
      'searchBycitizenCardNumber': '?citizenCardNumber=1&page=0&size=100&sortDirection=ASC',
      'searchByfirstName': '?firstName=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?lastName=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullNameRegistrant', 'type': 'hidden' },
      { 'title': 'เลขประจำตัวประชาชน-ชื่อ-นามสกุล', 'name': 'fullRegistrant', 'type': 'hidden' },
    ],

    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // สถาบันนิติวิทยาศาสตร์
  Dxc_Model_Cifs_AnonymousCorpse: [{
    'source': 'cifs',
    'data': 'anonymous-corpse',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/cifs/anonymous-corpse',
    },
    'queryPattern': {
      'searchBycitizenCardNumber': '?anonymousCorpseNumber=1&page=0&size=100&sortDirection=ASC',
      'searchByfirstName': '?firstName=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?lastName=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขที่ศพนิรนาม', 'name': 'anonymousCorpseNumber', 'pattern':'^[a-zA-Z0-9/]{2,20}' },
    ],

    'grid': [{
      'cells': [
        { 'id': 'anonymousCorpseNumber', 'title': 'เลขที่ศพนิรนาม', 'width': '120px', 'align': 'center' },
        { 'id': 'autopsyDate', 'title': 'วันที่ชันสูติศพ', 'width': '120px', 'align': 'center' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'personNationalityText', 'title': 'ต่างชาติ', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลการครอบครองกรรมสิทธิ์ที่ดินและห้องชุด
  Dxc_Model_Dol_Land_and_Condominium_Titles: [{
    'source': 'dol',
    'data': 'moi-dol-land-and-condominium-titles',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/dol/land-and-condominium-titles',
      'development': ''
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'propertyNo', 'title': 'เลขที่เอกสารสิทธิ', 'width': '120px', 'align': 'center' },
        { 'id': 'parcelTypeName', 'title': 'ประเภทเอกสารสิทธิ', 'width': '120px', 'align': 'center' },
        { 'id': 'parcelUtmLandNo', 'title': 'เลขที่ดิน', 'width': '120px', 'align': 'center' },
        { 'id': 'condoId', 'title': 'ทะเบียนอาคารชุด', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์
  Dxc_Model_Msdhs_Moi_New_Born_Babies: [{
    'source': 'msdhs',
    'data': 'moi-msdhs-new-born-babies',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/msdhs/new-born-babies'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อเด็ก', 'name': 'childName' },
      // { 'title': 'นามสกุลเด็ก', 'name': 'childSurname' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'childIdcard', 'title': 'เลขประจำตัวประชาชนชนเด็ก', 'width': '120px', 'align': 'center' },
        { 'id': 'childName', 'title': 'ชื่อเด็ก', 'width': '120px', 'align': 'center' },
        { 'id': 'childSurname', 'title': 'นามสกุลเด็ก', 'width': '120px', 'align': 'center' },
        { 'id': 'childRegisterDate', 'title': 'วันที่ลงทะเบียน', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ข้อมูลใบอนุญาต ป.4 ครอบครองอาวุธปืน
  Dxc_Model_Dopa_MoiDopaPor4Licenses: [{
    'source': 'Dopa',
    'data': 'por4License',
    'uniqFields': [''],
    'eventFields': [''],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/dopa/por4-licenses',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'fullNameAndRank', 'title': 'ชื่อเต็มผู้ขอใบอนุญาต ', 'width': '150px', 'align': 'left' },
        { 'id': 'gunSerialNo', 'title': 'เลขหมายประจำปืน', 'width': '150px', 'align': 'left' },
        { 'id': 'gunType', 'title': 'ประเภทอาวุธ', 'align': 'center', 'width': '70px' },
        { 'id': 'gunSize', 'title': 'ขนาดอาวุธปืน', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // กรมสอบสวนคดีพิเศษ
  Dxc_Model_Dsi_Warrant: [{
    'source': 'dsi',
    'data': 'warrant',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': '',
    'url': {
      'production': '/api/qm/dsi/arrest-warrants',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชนผู้ถูกออกหมาย', 'name': 'idCard', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'idCard', 'title': 'เลขประจำตัวประชาชน', 'width': '30%', 'align': 'center' },
        { 'id': 'accused', 'title': 'ชื่อ-นามสกุลผู้ต้องหา', 'width': '100px', 'align': 'center' },
        { 'id': 'lawsuitId', 'title': 'เลขที่หมายจับ', 'width': '20%', 'align': 'center' },
        { 'id': 'dateEnforcement', 'title': 'วันที่ออกหมายจับ', 'align': 'center', 'width': '20%' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],

  // สำนักงานตำรวจแห่งชาติ
  Dxc_Model_Rtp_MissingCarCase: [{
    'source': 'Rtp',
    'data': 'missingCarCase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/missing-car'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'หมวดอักษร', 'name': 'licensePlateNumberFrontPart', 'maxlength': '3' , 'pattern':'^[ก-๏\s]+$'},
      { 'title': 'เลขทะเบียน', 'name': 'licensePlateNumberBackPart', 'maxlength': '4', 'pattern':'^[0-9]{4}' },
      { 'title': 'ยี่ห้อ', 'name': 'brand', 'pattern':'^[a-zA-Z\s]+$' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'licensePlateNumberFrontPart', 'title': 'หมวด', 'width': '120px', 'align': 'center' },
        { 'id': 'licensePlateNumberBackPart', 'title': 'ทะเบียน', 'width': '120px', 'align': 'center' },
        { 'id': 'engineNumber', 'title': 'เลขเครื่อง', 'width': '120px', 'align': 'center' },
        { 'id': 'bodyNumber', 'title': 'เลขตัวถัง', 'width': '120px', 'align': 'center' },
        { 'id': 'type', 'title': 'ประเภท', 'width': '120px', 'align': 'center' },
        { 'id': 'brand', 'title': 'ยี่ห้อ', 'width': '120px', 'align': 'center' },
        { 'id': 'color', 'title': 'สี', 'width': '120px', 'align': 'center' },
        // { 'id': 'missingDate', 'title': 'วันที่หาย', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ประวัติบุคคลสูญหาย (ฐานข้อมูลเก่า ระบบ Police))
  Dxc_Model_Rtp_MissingPersonCase: [{
    'source': 'rtp',
    'data': 'missingPersonCase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/missing-person-case'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'สถานที่สงสัย', 'name': 'suspectPlace' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'height', 'title': 'ส่วนสูง', 'width': '120px', 'align': 'center' },
        { 'id': 'weight', 'title': 'น้ำหนัก', 'width': '120px', 'align': 'center' },
        { 'id': 'suspectPlace', 'title': 'สถานที่สงสัย', 'width': '120px', 'align': 'center' },
        { 'id': 'missingDate', 'title': 'วันที่หาย', 'width': '120px', 'align': 'center' },
        // { 'id': 'reportDate', 'title': 'วันที่รายงาน', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // สำนักงานตำรวจแห่งชาติ ฐานข้อมูลหมายจับ
  Dxc_Model_Rtp_ArrestWarrant: [{
    'source': 'rtp',
    'data': 'arrestWarrant',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/dxc-qm-ws-rest/rtp/arrest-warrant'
    },
    'queryPattern': {
      'searchBysubjectFullName': '?criteria="arrestWarrant.subjectFullName={{subjectFullName}}"',
      'searchBycourtName': '?criteria="arrestWarrant.courtName={{courtName}}"'
    },
    'basicSearch': [
      { 'title': 'ผู้ต้องหา', 'name': 'subjectFullName', 'pattern':'^[A-Za-zก-๏(),. ]+' },
      { 'title': 'ชื่อศาล', 'name': 'courtName', 'pattern':'^[ก-๏]+' },
      { 'title': 'ผู้ต้องหา-ชื่อศาล', 'name': 'fullNameAndCourtName', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'warrantNumber', 'title': 'รหัสนำจับ ', 'width': '30%', 'align': 'center' },
        { 'id': 'subjectFullName', 'title': 'ผู้ต้องหา', 'width': '20%', 'align': 'center' },
        { 'id': 'allegation', 'title': 'ข้อหา', 'align': 'center', 'width': '20%' },
        { 'id': 'effectiveDate', 'title': 'วันประกาศ', 'width': '100px', 'align': 'center' },
        { 'id': 'expirationDate', 'title': 'วันที่สิ้นสุด', 'width': '100px', 'align': 'center' },
        { 'id': 'policeFullName', 'title': 'ชื่อพนักงานสืบสวน', 'width': '100px', 'align': 'center' },

      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }],

  // กรมพัฒนาธุรกิจการค้า ข้อมูลนิติบุคคล
  Dxc_Model_Dbd_CommercialRegistrant: [{
    'source': 'dbd',
    'data': 'commercialregistrant',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/dbd/juristic-registration'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขทะเบียนนิติบุคคล', 'name': 'organizationJuristicID', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'organizationJuristicNameTH', 'title': 'ชื่อนิติบุคคล (ภาษาไทย)', 'width': '120px', 'align': 'center' },
        { 'id': 'organizationJuristicNameEN', 'title': 'ชื่อนิติบุคคล (ภาษาอังกฤษ)', 'width': '120px', 'align': 'center' },
        { 'id': 'organizationJuristicStatus', 'title': 'สถานะของนิติบุคคล', 'width': '120px', 'align': 'center' },
        { 'id': 'organizationJuristicType', 'title': 'ประเภทนิติบุคคล', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานปลัดกระทรวงยุติธรรม ฐานข้อมูลกองทุนยุติธรรม
  Dxc_Model_Jfo_Jfo_Case: [{
    'source': 'jfo',
    'data': 'jfoCase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/jfo/jfo-case'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenId', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'caseType', 'title': 'ประเภทสำนวน', 'width': '120px', 'align': 'center' },
        { 'id': 'provinceName', 'title': 'จังหวัดเจ้าของสำนวน', 'width': '120px', 'align': 'center' },
        { 'id': 'year', 'title': 'ปี', 'width': '120px', 'align': 'center' }

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลคนหาย
  Dxc_Model_Cifs_MissingPerson: [{
    'source': 'dbd',
    'data': 'commercialregistrant',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/cifs/missing-person'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'idCard', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text' , 'keypress':true},
    ],
    'grid': [{
      'cells': [
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'missingDate', 'title': 'วันที่หาย', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สถาบันนิติวิทยาศาสตร์-ฐานข้อมูลคนนิรนาม
  Dxc_Model_Cifs_Corpse: [{
    'source': 'cifs',
    'data': 'corpse',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/api/qm/v2/cifs/corpse',
    },
    'queryPattern': {
      'searchBycitizenCardNumber': '?anonymousCorpseNumber=1&page=0&size=100&sortDirection=ASC',
      'searchByfirstName': '?firstName=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?lastName=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'หมายเลขศพ', 'name': 'autopsyNumber' , 'pattern':'^[a-zA-Z0-9/]{2,20}'},
      { 'title': 'ชื่อผู้เสียชีวิต', 'name': 'personGivenName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุลผู้เสียชีวิต', 'name': 'personSurName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],

    'grid': [{
      'cells': [
        { 'id': 'autopsyNumber', 'title': 'หมายเลขศพ', 'width': '120px', 'align': 'center' },
        { 'id': 'personNationalityText', 'title': 'หมายเลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'personGivenName', 'title': 'ชื่อผู้เสียชีวิต', 'width': '120px', 'align': 'center' },
        { 'id': 'personSurName', 'title': 'นามสกุลผู้เสียชีวิต', 'width': '120px', 'align': 'center' }

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // อัยการ สำนวนหลัก
  Dxc_Model_Agoth_AttorneyMainCases: [{
    'source': 'agoth',
    'data': 'attorneymaincase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/ago/attorney-main-cases'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขรับสำนวน', 'name': 'rcNumber', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'generallcId', 'title': 'ID ของแต่ละ generallc', 'width': '120px', 'align': 'center' },
        { 'id': 'blackFile', 'title': 'หมายเลขคดีดำ', 'width': '120px', 'align': 'center' },
        { 'id': 'redFile', 'title': 'หมายเลขคดีแดง', 'width': '120px', 'align': 'center' },
        { 'id': 'policeName', 'title': 'หน่วยงานเจ้าของสำนวน', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ-ฐานข้อมูลผู้กระทำผิดกฎหมาย (ฐานข้อมูลเก่า ระบบ Police)
  Dxc_Model_Rtp_Criminal: [{
    'source': 'Rtp',
    'data': 'criminal',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/criminal'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text' , 'keypress':true},
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ศาล', 'name': 'courtName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'lastAddressProvince', 'title': 'ภูมิลำเนา', 'width': '120px', 'align': 'center' },
        { 'id': 'courtName', 'title': 'ศาล', 'width': '120px', 'align': 'center' },
        { 'id': 'crimeDate', 'title': 'วันที่รายงาน', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ทะเบียนแรงงานต่างด้าว (ทุกกลุ่ม)
  Dxc_Model_Doe_Moi_Alien_Workforces: [{
    'source': 'doe',
    'data': 'alienworkforces',
    'uniqFields': ['citizenCardNumber'],
    'eventFields': ['dateOfBirth'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/qm/v2/doe/alien-workforces',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ-นามสกุล', 'name': 'alienFullNmaeTh' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'alienCitizenId', 'title': 'เลขบัตรประจำตัวต่างด้าว', 'width': '120px', 'align': 'center' },
        { 'id': 'alienFullNmaeTh', 'title': 'ชื่อ-นามสกุลต่างด้าว(ไทย)', 'width': '150px', 'align': 'left' },
        { 'id': 'alienNation', 'title': 'สัญชาติคนต่างด้าว', 'width': '100px', 'align': 'center' },
        { 'id': 'workPermitIssuedDate', 'title': 'วันที่ออกใบอนุญาติทำงาน', 'width': '70px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }],
  // ใบอนุญาตขับขี่
  Dxc_Model_Dlt_DriverLicenseNew: [{
    'source': 'dlt',
    'data': 'driverLicense',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/dlt/driver-licenses/v2'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'licenseNumber', 'title': 'เลขที่อนุญาต', 'width': '120px', 'align': 'center' },
        { 'id': 'officeBranch', 'title': 'จังหวัด', 'width': '120px', 'align': 'center' },
        { 'id': 'type', 'title': 'ประเภท', 'width': '120px', 'align': 'center' },
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'fullName', 'title': 'ชื่อผู้ถือบัตร', 'width': '120px', 'align': 'center' },
        { 'id': 'licenseExpirationDate', 'title': 'หมดอายุ', 'width': '120px', 'align': 'center' },
        { 'id': 'status', 'title': 'สถานะ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ทะเบียนยานพาหนะ
  Dxc_Model_Dlt_CarLicenseNew: [{
    'source': 'dlt',
    'data': 'vehicleLicense',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dlt/vehicle-licenses'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="vehicleLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'docNo', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'จังหวัด', 'name': 'offLocCode', 'dropdown' : 'offLocCodes', 'type' : 'text' },
      { 'title': 'ตัวอักษรประจำหมวด', 'name': 'plate1' },
      { 'title': 'หมายเลขทะเบียนรถ', 'name': 'plate2' },
      { 'title': 'ประเภท', 'name': 'vehTypeRef', 'dropdown' : 'vehTypeRef', 'type' : 'text' },
      { 'title': 'ทะเบี่ยนรถ', 'name': 'CarLicense', 'type': 'hidden' },
      { 'title': 'เลขบัตรและทะเบี่ยนรถ', 'name': 'CidAndCarLicense', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'addressOwner1', 'title': 'ที่อยู่ผู้ถือกรรมสิทธิ์', 'width': '120px', 'align': 'center' },
        { 'id': 'vehTypeDesc', 'title': 'ประเภทรถ', 'width': '120px', 'align': 'center' },
        { 'id': 'brnDesc', 'title': 'ยี่ห้อรถ', 'width': '120px', 'align': 'center' },
        { 'id': 'cc', 'title': 'จำนวนซีซี', 'width': '120px', 'align': 'center' }
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานประกันสังคม
  Dxc_Model_Sso_EmployeeEmployment: [{
    'source': 'sso',
    'data': 'employeeEmployment',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/sso/employees/'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'ssoNum', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'ssoNum', 'title': 'เลขที่บัตรประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'genderDesc', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'empBirthDateText', 'title': 'เกิดวันที่', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลข้อหาในตัวผู้ต้องหา/จำเลย
  Dxc_Model_Agoth_Charge: [{
    'source': 'agoth',
    'data': 'charges',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/charges'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขผู้ต้องหา/จำเลย', 'name': 'accusedId', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'accusedChargeId', 'title': 'รหัสอ้างอิงข้อหาในผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'chargeDetail', 'title': 'ข้อหา', 'width': '120px', 'align': 'center' },
        { 'id': 'lawName', 'title': 'ชื่อกฏหมาย', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  //อัยการ ฐานข้อมูลสถานที่เกิดเหตุ GenerallcBean.List<AreaBean> DxcAreaBean *ทำแล้ว + template*
  Dxc_Model_Agoth_IncidentLocation: [{
    'source': 'agoth',
    'data': 'incidentLocation',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/incident-locations'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="incidentLocation.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'ตำบลที่เกิดเหตุ', 'name': 'tambolName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'อำเภอที่เกิดเหตุ', 'name': 'amphurName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'จังหวัดที่เกิดเหตุ', 'name': 'provinceName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'generallcId', 'title': 'ID ของแต่ละ generallc', 'width': '100px', 'align': 'center' },
        { 'id': 'tambolName', 'title': 'ตำบลที่เกิดเหตุ', 'width': '100px', 'align': 'center' },
        { 'id': 'amphurName', 'title': 'อำเภอที่เกิดเหตุ', 'width': '100px', 'align': 'center' },
        { 'id': 'provinceName', 'title': 'อำเภอที่เกิดเหตุ', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลผู้ต้องหา/จำเลย
  Dxc_Model_Agoth_ChargeSubject: [{
    'source': 'agoth',
    'data': 'agothchargesubject',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/charge-subjects'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประจำตัวประชาชนผู้ต้องหา', 'name': 'citizenId', 'maxlength': '13', 'pattern':'[0-9]{13}',  'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'name1', 'title': 'ชื่อผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'surname1', 'title': 'นามสกุลผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'nationalityName', 'title': 'สัญชาติผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'age', 'title': 'อายุผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'occupationName', 'title': 'อาชีพผู้ต้องหา', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลผู้เสียหาย
  Dxc_Model_Agoth_ChargeVictim: [{
    'source': 'agoth',
    'data': 'chargevictim',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/charge-victims'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประจำตัวประชาชนผู้เสียหาย', 'name': 'citizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'complainantId', 'title': 'รหัสอ้างอิงผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'citizenId', 'title': 'เลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'name1', 'title': 'ชื่อผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'surname1', 'title': 'นามสกุลผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'nationalityName', 'title': 'สัญชาติผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'occupationName', 'title': 'อาชีพผู้เสียหาย', 'width': '120px', 'align': 'center' },

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลคำพิพากษาในตัวผู้ต้องหา/จำเลย
  Dxc_Model_Agoth_ChargeVerdict: [{
    'source': 'agoth',
    'data': 'chargeverdict',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/charge-verdicts'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'รหัสผู้ต้องหา/จำเลย', 'name': 'accusedId', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'courtresultId', 'title': 'รหัสศาล', 'width': '120px', 'align': 'center' },
        { 'id': 'courtName', 'title': 'ชื่อศาล', 'width': '120px', 'align': 'center' },
        { 'id': 'courtLevelName', 'title': 'ชั้นศาล', 'width': '120px', 'align': 'center' },
        { 'id': 'judgementName', 'title': 'คำพิพากษา/คำสั่ง (ข้อความ)', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลสำนวนย่อย
  Dxc_Model_Agoth_AttorneySubcase: [{
    'source': 'agoth',
    'data': 'attorneysubcase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/attorney-subcases'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขรายงานการสอบสวนคดี', 'name': 'inqNumber', 'pattern':'^[0-9/]{2,10}$', 'type':'text' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'inqNumber', 'title': 'เลขรายงานการสอบสวนคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'fileTypeName', 'title': 'ชนิดสำนวน', 'width': '120px', 'align': 'center' },
        { 'id': 'inqDetail', 'title': 'รายละเอียดข้อมูลคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'incedentDetail', 'title': 'รายละเอียดการเกิดเหตุ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลคำสั่งอัยการ
  Dxc_Model_Agoth_Case_Prosecution_Attorney_Order: [{
    'source': 'agoth',
    'data': 'caseProsecutionAttorneyOrder',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/case-prosecution-attorney-orders'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'รหัสคำสั่งอัยการ', 'name': 'managementId', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'managementId', 'title': 'รหัสคำสั่งอัยการ', 'width': '120px', 'align': 'center' },
        { 'id': 'description', 'title': 'คำสั่งอัยการ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // อัยการ ฐานข้อมูลอัยการแต่ละสำนวน
  Dxc_Model_Agoth_CaseProsecutionAttorney: [{
    'source': 'agoth',
    'data': 'caseProsecutionAttorney',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/case-prosecution-attorneys'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'รหัสอัยการ', 'name': 'prosecuteId', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'prosecuteId', 'title': 'รหัสอัยการ', 'width': '120px', 'align': 'center' },
        { 'id': 'prosName', 'title': 'ชื่ออัยการ', 'width': '120px', 'align': 'center' },
        { 'id': 'assignTypeName', 'title': 'สถานะการทำงาน', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ผู้ต้องขัง (คดีที่ยังไม่พิพากษา
  Dxc_Model_Doc_Remandee: [{
    'source': 'doc',
    'data': 'remandee',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/doc/remandees'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'โทษฐาน', 'name': 'allegation', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'prisonerId', 'title': 'เลขผู้ต้องขัง', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'undecidedCaseId', 'title': 'เลขคดีดำ', 'width': '120px', 'align': 'center' },
        { 'id': 'allegation', 'title': 'โทษฐาน', 'width': '120px', 'align': 'center' },
        { 'id': 'sentenceDate', 'title': 'วันที่ได้รับโทษ', 'width': '120px', 'align': 'center' },
        { 'id': 'releaseDate', 'title': 'วันปล่อยตัว', 'width': '120px', 'align': 'center' },
        { 'id': 'prisonName', 'title': 'เรือนจำ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลผู้พ้นโทษ
  Dxc_Model_Doc_ReleasedOffender: [{
    'source': 'doc',
    'data': 'releasedoffender',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/idb/released-offender'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'undecidedCaseId', 'title': 'เลขคดีดำ', 'width': '120px', 'align': 'center' },
        { 'id': 'decidedCaseId', 'title': 'เลขคดีแดง', 'width': '120px', 'align': 'center' },
        { 'id': 'releaseDetail', 'title': 'รายละเอียดการพ้นโทษ', 'width': '120px', 'align': 'center' },
        { 'id': 'departmentName', 'title': 'ชื่อหน่วยงานเจ้าของข้อมูล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลภาพใบหน้าผู้ต้องขัง
  Dxc_Model_Doc_PrisonerImages: [{
    'source': 'doc',
    'data': 'prisonerimages',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/doc/prisoner-images'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชนผู้ต้องขัง', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'เลขผู้ต้องขัง', 'name': 'prisonerId', 'pattern':'^[0-9/]{2,20}' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขบัตรประชาชนผู้ต้องขัง', 'width': '120px', 'align': 'center' },
        { 'id': 'prisonerId', 'title': 'เลขผู้ต้องขัง', 'width': '120px', 'align': 'center' },
        { 'id': 'imageSideText', 'title': 'ตำแหน่งรูปภาพ', 'width': '120px', 'align': 'center' },
        { 'id': 'imageDate', 'title': 'ภาพถ่ายวันที่', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลรายงานการตรวจพิสูจน์
  Dxc_Model_Cifs_ReportVerification: [{
    'source': 'doc',
    'data': 'reportverification',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/cifs/report-verification'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'prefix', 'title': 'คำนำหน้าชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'firstname', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastname', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'reportDate', 'title': 'ประเภทการตรวจ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อตัว
  Dxc_Model_Dopa_Moi_PersonChangenamePrimary: [{
    'source': 'doc',
    'data': 'personchangenameprimary',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dopa/person-changename-primary'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อตัวของผู้ขอใบอนุญาต', 'width': '120px', 'align': 'center' },
        { 'id': 'newName', 'title': 'ชื่อสกุลที่ร่วมใช้', 'width': '120px', 'align': 'center' },
        { 'id': 'docDate', 'title': 'วันเดือนปีที่ออกหนังสืออนุญาต', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลสารบบคดี (มิติคดี)
  Dxc_Model_Idb_DirectoryDimensionCase: [{
    'source': 'agoth',
    'data': 'directoryDimensionCase',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/directory-dimension-case'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขคดีดำ', 'name': 'generallcBlackFile' },
      { 'title': 'เลขคดีแดง', 'name': 'generallcRedFile' },
      { 'title': 'เลขคดีอาญา', 'name': 'generalInqnumber' },
      { 'title': 'เลขคดีดำ-เลขคดีแดง', 'name': 'fullName', 'type': 'hidden' },
      { 'title': 'เลขคดีดำ-เลขคดีอาญา', 'name': 'blackFileAndInqnumber', 'type': 'hidden' },
      { 'title': 'เลขคดีแดง-เลขคดีอาญา', 'name': 'RedFileAndInqnumber', 'type': 'hidden' },
      { 'title': 'เลขคดีแดง-เลขคดีดำ-เลขคดีอาญา', 'name': 'BlackFileRedFileAndInqnumber', 'type': 'hidden' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'generallcBlackFile', 'title': 'เลขคดีดำ', 'width': '10%', 'align': 'center' },
        { 'id': 'generallcOffencesTypeName', 'title': 'ประเภทฐานความผิด', 'width': '10%', 'align': 'center' },
        { 'id': 'generallcOfficeName', 'title': 'ชื่อสำนักงานอัยการ', 'width': '10%', 'align': 'center' },
        { 'id': 'generallcPoliceName', 'title': 'สถานีตำรวจ', 'width': '10%', 'align': 'center' },
        { 'id': 'generallcRecDate', 'title': 'วันที่อัยการรับสำนวน', 'width': '10%', 'align': 'center' },
        { 'id': 'generallcRedFile', 'title': 'เลขคดีแดง', 'width': '10%', 'align': 'center' },
        { 'id': 'year', 'title': 'ปี', 'width': '10%', 'align': 'center' },
        { 'id': 'generalCourtName', 'title': 'ชื่อศาล', 'width': '10%', 'align': 'center' },
        { 'id': 'generalInqnumber', 'title': 'เลขคดีอาญา', 'width': '10%', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลสารบบคดี (มิติคน)
  Dxc_Model_Idb_DirectoryDimensionPerson: [{
    'source': 'agoth',
    'data': 'directoryDimensionPerson',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/ago/directory-dimension-persons'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชนผู้ต้องหา/จำเลย', 'name': 'accusedCitizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อผู้ต้องหา/จำเลย', 'name': 'accusedsName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'สกุลผู้ต้องหา/จำเลย', 'name': 'accusedsSurname', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อนามสกุลผู้ต้องหา/จำเลย', 'name': 'fullName', 'type': 'hidden' },
      // { 'title': 'เลขบัตรประชาชนผู้เสียหาย', 'name': 'complainantCitizenId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [

        { 'id': 'accusedsName', 'title': 'ชื่อผู้ต้องหา/จำเลย', 'width': '120px', 'align': 'center' },
        { 'id': 'accusedsSurname', 'title': 'สกุลผู้ต้องหา/จำเลย', 'width': '120px', 'align': 'center' },
        { 'id': 'complainantName', 'title': 'ชื่อผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'complainantSurname', 'title': 'สกุลผู้เสียหาย', 'width': '120px', 'align': 'center' },
        { 'id': 'accusedchargeChargeName', 'title': 'ข้อหา', 'width': '120px', 'align': 'center' },
        { 'id': 'courtresultJudgementDetail', 'title': 'รายละเอียด คำพิพากษา', 'width': '120px', 'align': 'center' },
        { 'id': 'manageDescrition', 'title': 'คำสั่งอัยการ', 'width': '120px', 'align': 'center' },
        { 'id': 'manageManagedate', 'title': 'วันที่สั่งอัยการ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70,]'
    }]
  }],
  // ฐานข้อมูลทะเบียนราษฎร (ค้นหาด้วยชื่อตัว-ชื่อสกุล) (Linkage)
  Dxc_Model_Dopa_MoiDopaPersonFirstnameLastname: [{
    'source': 'dopa',
    'data': 'personfirstnamelastname',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dopa/person-firstname-lastname'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'ชื่อตัว', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
    ],
    'grid': [{
      'cells': [

        { 'id': 'pid', 'title': 'เลขบัตรประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อตัว', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'ชื่อสกุล', 'width': '120px', 'align': 'center' },
        // { 'id': 'dateOfBirth', 'title': 'วันเดือนปี เกิด', 'width': '120px', 'align': 'center' },
        { 'id': 'nationalityDesc', 'title': 'สัญชาติ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลการจดทะเบียนเปลี่ยนชื่อสกุล (Linkage)
  Dxc_Model_Dopa_MoiDopaPersonChangelastname: [{
    'source': 'dopa',
    'data': 'changelastnameprimary',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dopa/person-changelastname'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [

        { 'id': 'pid', 'title': 'เลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อตัวของผู้ขอใบอนุญาต', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'ชื่อสกุลที่แจ้งเปลี่ยน', 'width': '120px', 'align': 'center' },
        { 'id': 'docDate', 'title': 'วันเดือนปีที่ออกหนังสืออนุญาต', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ฐานข้อมูลประวัติผู้จ้างงาน สำนักงานประกันสังคม
  Dxc_Model_Sso_Employment: [{
    'source': 'sso',
    'data': 'employment',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/sso/employments/'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'ssoNum', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'companyName', 'title': 'ชื่อบริษัท', 'width': '120px', 'align': 'center' },
        { 'id': 'expStartDate', 'title': 'วันที่เริ่มจ้างงาน', 'width': '120px', 'align': 'center' },
        { 'id': 'employStatusDesc', 'title': 'สถานะลูกจ้าง', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // กรมส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ
  Dxc_Model_Dep_Moi_Cripple: [{
    'source': 'dep',
    'data': 'cripple',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dep/cripple'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'personCode', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'personName', 'title': 'ชื่อ-สกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'deformName', 'title': 'ประเภทความพิการ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // กรมการกงสุล
  Dxc_Model_Dca_Moi_Thailand_Passport: [{
    'source': 'dca',
    'data': 'thailandPassport',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/dca/thailand-passport'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'firstNameTH', 'title': 'ชื่อภาษาไทย', 'width': '120px', 'align': 'center' },
        { 'id': 'lastNameTH', 'title': 'นามสกุลภาษาไทย', 'width': '120px', 'align': 'center' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'passportNo', 'title': 'หมายเลขหนังสือเดินทาง', 'width': '120px', 'align': 'center' },
        { 'id': 'passportStatus', 'title': 'สถานะหนังสือเดินทาง', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // หมายจับศาล
  Dxc_Model_Coj_ArrestWarrants: [{
    'source': 'coj',
    'data': 'arrestWarrants',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/coj/arrest-warrants'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'accCardId', 'maxlength': '13', 'pattern':'[0-9]{13}' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'accCardId', 'title': 'เลขประจำตัวประชาชน ผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'accFullName', 'title': 'ชื่อ-สกุลผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'accAge', 'title': 'อายุ', 'width': '120px', 'align': 'center' },
        { 'id': 'arrestDate', 'title': 'จับได้เมื่อวันที่', 'width': '120px', 'align': 'center' },
        { 'id': 'arrestOfficerName', 'title': 'ชื่อเจ้าหน้าที่ผู้จับกุม', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // คำพิพากษาอย่างย่อศาล
  Dxc_Model_Coj_JudgementSummarys: [{
    'source': 'coj',
    'data': 'judgementSummarys',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/v2/coj/judgement-summary'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'หมายเลขคดีดำ (หมายเลขคดีดำตัวแรกขึ้นต้นด้วยพยัญชนะ ไม่มีจุด และไม่เว้นวรรค)', 'name': 'caseNo', 'pattern':'^[ก-๏\s]+$', 'type':'text', 'keypress':true },
      { 'title': 'รหัสศาล', 'name': 'court', 'dropdown' : 'dropdown', 'type' : 'text' },
      { 'title': 'หมายเลขคดีดำ-รหัสศาล', 'name': 'fullName', 'type': 'hidden'}
    ],
    'grid': [{
      'cells': [
        { 'id': 'case', 'title': 'หมายเลขคดีดำ', 'width': '120px', 'align': 'center' },
        { 'id': 'xbase.red_no', 'title': 'หมายเลขคดีแดง', 'width': '120px', 'align': 'center' },
        { 'id': 'courtname', 'title': 'ชื่อศาล', 'width': '120px', 'align': 'center' },
        { 'id': 'case_date', 'title': 'รับฟ้อง', 'width': '120px', 'align': 'center' },
        { 'id': 'juding_date', 'title': 'วันพิพากษาตัดสิน', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // คำพิพากษาฉบับเต็ม
  Dxc_Model_Coj_Judgement: [{
    'source': 'coj',
    'data': 'judgement',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/coj/judgements',
      'production2': '/api/qm/coj/judgements/files'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'หมายเลขคดีดำ (หมายเลขคดีดำตัวแรกขึ้นต้นด้วยพยัญชนะ ไม่มีจุด และไม่เว้นวรรค)', 'name': 'blackNo' },
      { 'title': 'รหัสศาล', 'name': 'courtCode', 'dropdown' : 'courtCode', 'type' : 'text' },
      { 'title': 'หมายเลขคดีดำ-รหัสศาล', 'name': 'fullName', 'type': 'hidden'}

    ],
    'grid': [{
      'cells': [
        { 'id': 'blackNo', 'title': 'หมายเลขคดีดำ', 'width': '120px', 'align': 'center' },
        { 'id': 'redNo', 'title': 'หมายเลขคดีแดง', 'width': '120px', 'align': 'center' },
        { 'id': 'courtName', 'title': 'ชื่อศาล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ข้อมูลทะเบียนผู้เสียภาษี
  Dxc_Model_Mof_register_Of_Taxpayers: [{
    'source': 'mof',
    'data': 'registeroftaxpayers',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/v2/moi-linkage/persons'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวผู้เสียภาษี', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}' },
    ],
    'grid': [{
      'cells': [
        { 'id': 'tin', 'title': 'เลขประจำตัวผู้เสียภาษี', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานปลัดกระทรวงยุติธรรม ฐานข้อมูลกองทุนยุติธรรม64
  Dxc_Model_Jfo_Jfo_Case64: [{
    'source': 'jfo',
    'data': 'jfoCase64',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/jfo/jfo-case64'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'cardId', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'jfCaseNo', 'title': 'เลขสำนวน กทย.', 'width': '120px', 'align': 'center' },
        { 'id': 'subject', 'title': 'ชื่อเรื่อง', 'width': '120px', 'align': 'center' },
        { 'id': 'createDate', 'title': 'วันที่รับเรื่อง', 'width': '120px', 'align': 'center' },
        { 'id': 'registerDate', 'title': 'วันที่ลงระบบ', 'width': '120px', 'align': 'center' }

      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ฐานข้อมูลคดีอาญา)
  Dxc_Model_Rtp_CriminalCase: [{
    'source': 'Rtp',
    'data': 'criminal-case',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/criminal-case'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชนผู้ต้องหา', 'name': 'pid', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true  },
      { 'title': 'ชื่อผู้ต้องหา', 'name': 'fname','pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุลผู้ต้องหา', 'name': 'lname','pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุลผู้ต้องหา', 'name': 'flname', 'type':'hidden', }
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseNo', 'title': ' เลขคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'displayChargePerson', 'title': 'ข้อหา', 'width': '120px', 'align': 'center' },
        { 'id': 'statusMagenta', 'title': 'สถานะคดี', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ข้อมูลการเดินทางเข้าออกประเทศ)
  Dxc_Model_Rtp_TravelInformation: [{
    'source': 'Rtp',
    'data': 'travel-information',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      // 'production': '/api/v2/moi-linkage/persons'
      'production': '/api/qm/v2/rtp/thai-entry-exit'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'idCardNo', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'tdtNo', 'title': 'หมายเลขพาสพอร์ท', 'width': '120px', 'align': 'center' },
        { 'id': 'efullName', 'title': 'ชื่อ สกุล ผู้โดยการ (Eng)', 'width': '120px', 'align': 'center' },
        { 'id': 'sex', 'title': 'เพศ', 'width': '120px', 'align': 'center' },
        { 'id': 'naionEm', 'title': 'สัญชาติ', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ฐานข้อมูลคดีจราจร)
  Dxc_Model_Rtp_TrafficCase: [{
    'source': 'Rtp',
    'data': 'traffic-case',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/traffic-case'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน-ผู้ต้องหา', 'name': 'criminalNin', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'criminalNin', 'title': 'เลขบัตรประชาชน-ผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'crimialName', 'title': 'ชื่อ-ผู้ต้องหา', 'width': '120px', 'align': 'center' },
        { 'id': 'caseId', 'title': 'เลขคดี', 'width': '120px', 'align': 'center' },
        { 'id': 'policeStationName', 'title': 'ชื่อสถานี', 'width': '120px', 'align': 'center' },
        { 'id': 'policeRegion', 'title': 'บช./ภาค', 'width': '120px', 'align': 'center' },
        { 'id': 'policeProvince', 'title': 'บก./ภ.จว', 'width': '120px', 'align': 'center' }
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ฐานข้อมูลทะเบียนประวัติอาชญากร)
  Dxc_Model_Rtp_CriminalRecord: [{
    'source': 'Rtp',
    'data': 'criminal-record',
    'uniqFields': [],
    'eventFields': [],
    'type': 'vehical',
    'category': '',
    'url': {
      'production': '/api/qm/v2/rtp/criminal-record-information'
    },
    'queryPattern': {
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'idNo', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true }
    ],
    'grid': [{
      'cells': [
        { 'id': 'idNo', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'cardFName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'cardLName', 'title': 'สกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'happendD', 'title': 'วันที่เกิดเหตุ', 'width': '120px', 'align': 'center' },
        { 'id': 'chargeD', 'title': 'วันที่จับกุม', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // ข้อมูลเลือกสถานพยาบาล สำนักงานประกันสังคม
  Dxc_Model_Sso_Selected_Hospital: [{
    'source': 'sso',
    'data': 'selectedhospital',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/sso/select-hospitals'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประชาชน', 'name': 'ssoNum', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ปี พ.ศ.', 'name': 'year', 'maxlength': '4', 'pattern':'[0-9]{4}', 'type':'text', 'keypress':true  },
      { 'title': 'fullSso', 'name': 'fullSso', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'hidden', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'person.ssoNum', 'title': 'เลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'person.firstName', 'title': 'ชื่อผู้ประกันตน', 'width': '120px', 'align': 'center' },
        { 'id': 'person.lastName', 'title': 'สกุลผู้ประกันตน', 'width': '120px', 'align': 'center' },
        { 'id': 'person.activeStatusDesc', 'title': 'สถานะผู้ประกันตน', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],
  // สำนักงานตำรวจแห่งชาติ (ฐานข้อมูลหมายจับ)
  Dxc_Model_Rtp_Warrant_Of_Arrest: [{
    'source': 'rtp',
    'data': 'warrantOfArrest',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/qm/v2/rtp/arrest-warrant'
    },
    'queryPattern': {
      'searchBysubjectFullName': '?criteria="arrestWarrant.subjectFullName={{subjectFullName}}"',
      'searchBycourtName': '?criteria="arrestWarrant.courtName={{courtName}}"'
    },
    'basicSearch': [
      { 'title': 'เลขบัตรประจำตัวประชาชน ผู้ต้องหา', 'name': 'accusedNin', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ผู้ต้องหา', 'name': 'accusedsFullName', 'pattern':'^[A-Za-zก-๏(),. ]+' },
      // { 'title': 'หมายเลขคดี', 'name': 'caseNo', 'pattern':'^[ก-๏]+' }
    ],
    'grid': [{
      'cells': [
        { 'id': 'caseId', 'title': 'หมายเลขคดี', 'width': '30%', 'align': 'center' },
        { 'id': 'accusedFullName', 'title': 'ผู้ต้องหา', 'width': '20%', 'align': 'center' },
        { 'id': 'warrantId', 'title': 'เลขหมายจับ', 'align': 'center', 'width': '20%' },
        { 'id': 'warrantType', 'title': 'ประเภทหมายจับ	', 'width': '100px', 'align': 'center' },
        { 'id': 'warrantStatus', 'title': 'สถานะหมายจับ	', 'width': '100px', 'align': 'center' },
        { 'id': 'policeStation', 'title': 'ชื่อสถานี', 'width': '100px', 'align': 'center' },
        
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }],
  // กรมพินิจและคุ้มครองเด็กและเยาวชน เด็กหรือเยาวชนผู้กระทำผิด
  Dxc_Model_Djop_JuvenileOffender65: [{
    'source': 'Djop',
    'data': 'juvenileOffender65',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': '',
    'url': {
      'production': '/api/qm/v2/djop/juvenile-offender-2567'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByfirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'idCardNo', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      // { 'title': 'ชื่อ', 'name': 'jvnFname', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$'},
      // { 'title': 'นามสกุล', 'name': 'jvnLname', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$'},
      // { 'title': 'jvnFullNameAndjvnCardId', 'name': 'jvnFullNameAndjvnCardId', 'type':'hidden' },
      // { 'title': 'jvnFullName', 'name': 'jvnFullName', 'type':'hidden' },

    ],
    'grid': [{
      'cells': [
        { 'id': 'jvnCardId', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'jvnFname', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'jvnLname', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'jvnSex', 'title': 'เพศ', 'width': '150px', 'align': 'left' },
        { 'id': 'caseNocaseYearFirst', 'title': 'เลขคดีของแต่ละหน่วยงาน/ปีของเลขคดี', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }
  ],

  // กรมราชทัณฑ์ ผู้ต้องขัง (บุคคลล้มละลาย)
  Dxc_Model_Doc_Prisoner_Bankrupt: [{
    'source': 'Doc',
    'data': 'prisonerbankrupt',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': '',
    'url': {
      'production': '/api/v2/doc/prisoners-bankrupt'

    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByfirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchBylastName': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$'},
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$'},
      { 'title': 'fullNameAndhistIdCard', 'name': 'fullNameAndhistIdCard', 'type':'hidden' },
      { 'title': 'fullName', 'name': 'fullName', 'type':'hidden' },

    ],
    'grid': [{
      'cells': [
        { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'prisonerId', 'title': 'เลขผู้ต้องขัง', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'undecidedCaseId', 'title': 'เลขคดีดำ', 'align': 'center', 'width': '70px' },
        { 'id': 'allegation', 'title': 'โทษฐาน', 'width': '100px', 'align': 'center' },
        { 'id': 'sentenceDate', 'title': 'วันที่ได้รับโทษ', 'width': '70px', 'align': 'center' },
        { 'id': 'releaseDate', 'title': 'วันปล่อยตัว', 'width': '100px', 'align': 'center' },
        { 'id': 'prisonName', 'title': 'เรือนจำ', 'width': '100px', 'align': 'center' }
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }
  ],
  // กรมคุมประพฤติ
  Dxc_Model_Dop_Probationer_Narcotics: [{
    'source': 'Dop',
    'data': 'probationernarcotics',
    'uniqFields': ['citizenCardNumber', 'officeId', 'caseRegistrationYear', 'caseRegistrationNumber'],
    'eventFields': ['probationStartDate', 'probationPlannedEndDate', 'caseRegistrationYear'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/dop/probationer-narcotics'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByCaseRegistrationYear': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'idCardNo', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'idCardNo', 'title': 'เลขประจำตัวประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'ชื่อสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'activityName', 'title': 'ชื่อกิจกรรม', 'width': '150px', 'align': 'left' },
        { 'id': 'startDate', 'title': 'วันที่เริ่มกิจกรรม', 'width': '150px', 'align': 'left' },
        { 'id': 'endDate', 'title': 'วันที่สิ้นสุดกิจกรรม', 'width': '150px', 'align': 'left' },
      ],
      'widths': '[100,100,200,100,200,200,200,200]'
    }]
  }
  ],
  // กรมคุมประพฤติ รายงานการสืบเสาะข้อเท็จจริง
  Dxc_Model_Dop_Fact_Finding_Report: [{
    'source': 'Dop',
    'data': 'factFindingReport',
    'uniqFields': ['citizenCardNumber', 'officeId', 'caseRegistrationYear', 'caseRegistrationNumber'],
    'eventFields': ['probationStartDate', 'probationPlannedEndDate', 'caseRegistrationYear'],
    'type': 'person',
    'category': 'criminalRecords',
    'url': {
      'production': '/api/v2/dop/fact-finding-report'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByFirstName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByLastName': '?userNin=1234&size=100&sortDirection=ASC',
      'searchByCaseRegistrationYear': '?userNin=1234&size=100&sortDirection=ASC',

    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      // { 'title': 'เลขที่หนังสือราชการ', 'name': 'caseRegistrationYear','maxlength': '4', 'pattern':'[0-9]{4}', 'type':'text', 'keypress':true },
      { 'title': 'เรือนจำ', 'name': 'prison', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'ชื่อ-นามสกุล', 'name': 'fullName', 'type': 'hidden' },
      { 'title': 'ชื่อ-นามสกุล-เรือนจำ', 'name': 'fullNameAndPrison', 'type': 'hidden' },
      { 'title': 'ชื่อ-เรือนจำ', 'name': 'firstNameAndPrison', 'type': 'hidden' },
      { 'title': 'นามสกุล-เรือนจำ', 'name': 'lastNameAndPrison', 'type': 'hidden' },
      { 'title': 'เลขประจำตัวประชาชน-เรือนจำ', 'name': 'citizenCardNumberAndPrison', 'type': 'hidden' },
    ],

    'grid': [{
      'cells': [
        // { 'id': 'citizenCardNumber', 'title': 'เลขประจำตัวประชาชน', 'width': '150px', 'align': 'left' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'align': 'center', 'width': '70px' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '100px', 'align': 'center' },
        { 'id': 'prison', 'title': 'เรือนจำ', 'width': '100px', 'align': 'center' },
      ],
      'widths': '[100,100,200,100,200,200,200,200]'
    }]
  }
  ],
  // กรมราชทัณฑ์ แบบบันทึกข้อมูลนักโทษเด็ดขาดก่อนปล่อยคุมประพฤติ
  Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation: [{
    'source': 'doc',
    'data': 'absolutePrisonerInformationBeforeReleaseOnProbation',
    'uniqFields': [],
    'eventFields': [],
    'type': 'person',
    'category': 'general',
    'url': {
      'production': '/api/v2/doc/dxc-qm-doc-absolute-prisoner-information-service'
    },
    'queryPattern': {
      'searchByCitizenNumber': '?criteria="driverLicense.citizenCardNumber={{citizenNumber}}"',
    },
    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'citizenCardNumber', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
      { 'title': 'ชื่อ', 'name': 'firstName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'นามสกุล', 'name': 'lastName', 'pattern':'^[a-zA-Z\s]+$|^[ก-๏\s]+$' },
      { 'title': 'หมายเลขคดีแดง', 'name': 'redNo', 'pattern':'[ก-ฮ]+\d+/\d+', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [

        { 'id': 'citizenCardNumber', 'title': 'เลขบัตรประชาชน', 'width': '120px', 'align': 'center' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '120px', 'align': 'center' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '120px', 'align': 'center' },
        { 'id': 'redNo', 'title': 'หมายเลขคดีแดง', 'width': '120px', 'align': 'center' },
      ],
      'widths': '[150,150,150,100,150,70]'
    }]
  }],

  // ข้อมูลนักเรียน กระทรวงศึกษาธิการ
  Dxc_Model_Moi_Moe_Students: [{
    'source': 'Moe',
    'data': 'students',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',
    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'personalID', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'prefixName', 'title': 'คำนำหน้าชื่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'schoolName', 'title': 'ชื่อสถานศึกษา', 'width': '150px', 'align': 'left' },
        { 'id': 'studentStatusName', 'title': 'สถานะนักเรียน', 'align': 'center', 'width': '70px' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }],

  // ฐานข้อมูลผู้สำเร็จการศึกษา (Linkage2) กระทรวงศึกษาธิการ
  Dxc_Model_Moi_Moe_Graduates: [{
    'source': 'Moe',
    'data': 'students',
    'uniqFields': [],
    'eventFields': [],
    'type': '',
    'category': '',
    'url': {
      'production': '/dxc-qm-moi-linkage-service/api/v2/moi-linkage/persons',
    },
    'queryPattern': {
      'searchByCitizenNumber': '?userNin=0000000000000',
      'searchByName': '?userNin=1234&size=100&sortDirection=ASC',
    },

    'basicSearch': [
      { 'title': 'เลขประจำตัวประชาชน', 'name': 'personalID', 'maxlength': '13', 'pattern':'[0-9]{13}', 'type':'text', 'keypress':true },
    ],
    'grid': [{
      'cells': [
        { 'id': 'prefixName', 'title': 'คำนำหน้าชื่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'firstName', 'title': 'ชื่อ', 'width': '150px', 'align': 'left' },
        { 'id': 'lastName', 'title': 'นามสกุล', 'width': '150px', 'align': 'left' },
        { 'id': 'educationLevelName', 'title': 'ระดับการศึกษา', 'width': '150px', 'align': 'left' },
        { 'id': 'degreeName', 'title': 'วุฒิการศึกษา', 'width': '150px', 'align': 'left' },
        { 'id': 'academicYear', 'title': 'ปีที่สำเร็จการศึกษา', 'align': 'center', 'width': '70px' },
      ],
      'widths': '[150,200,200,100,150,100,200]'
    }]
  }],
  Dxc_Model_Userprofile: [{
    'url': {
      'production': ''
    },
  }
  ],
  Dxc_Model_Policies: [{
    'url': {
      'production': '/dxc-self-service-service/api/registration/findgroudid/',
    },
  }
  ],
  Dxc_Model_Userlogin: [{
    'url': {
      'production': '/api/sso/access-token',
      'development': 'https://search.dxc.go.th/api/sso/access-token',
    },
  }
  ],
  Dxc_Model_ExportWord: [{
    'url': {
      'production': '/api/phpoffice/docx.php',
      'development': 'http://127.0.0.1:8082/phpoffice/docx.php',
    },
  }
  ],
  Dxc_Model_Reason: [{
    'url': {
      'production': '/api/qm/v2/dxc-reason-service/dxc-search-service/api/reason/add/',
      'development': 'http://192.168.1.136:8081/api/reason/add',
    },
  }
  ],
  Dxc_Model_UserAccount: [{
    'url': {
      'production': '',
      'development': 'http://192.168.1.136:8082/api/useraccount/add',
    },
  }
  ],

  Dxc_Model_GetUserAccount: [{
    'url': {
      'production': '',
      'development': 'http://192.168.1.136:8082/api/useraccount',
    },
    'queryPattern': {
      'getActivateCode': '?userNin=1234&size=100&sortDirection=ASC',
      'getUserAccount': '?userNin=1234&size=100&sortDirection=ASC',

    },

  },
  ],
  Dxc_Model_LOG_TYPE: [{
    'url': {
      'production': '/api/single-report',
      'development': '/api/single-report'
    }
  }],
  Dxc_Model_MY_DATASET: [{
    'url': {
      'production': '/api/my/datasets',
      'development': '/api/my/datasets'
    }
  }],
  Dxc_Model_Notice: [{
    'url': {
      'production': '/api/qm/dxc/notice/findAll',
      'development': '/api/qm/dxc/notice/findAll',
    },
  }],
  Dxc_Model_Count_ExpirDate: [{
    'url': {
      'production': '/dxc-self-service-service/api/countExpirDate/getCountExpirDate/',
      'development': '/dxc-self-service-service/api/countExpirDate/getCountExpirDate/',
    },
  }],
  Dxc_Model_Login_ThaiD: [{
    'url': {
      'production': '/api/login/thaid-linkage2/inset',
    },
  }],
};
