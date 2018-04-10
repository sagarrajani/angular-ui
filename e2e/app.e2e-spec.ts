import { HwVodPage } from '../e2e/app.po';

describe('hw-vod App', () => {
  let page: HwVodPage;

  beforeEach(() => {
    page = new HwVodPage();
  });

  it('should have correct title', () => {
    page.navigateTo();
    page.getPageTitle().then((title: string)=>{
    	expect(title).toEqual('UCS-VOD');	
    });
  });

  it('Able to login', ()=>{
  	page.navigateTo();
  	page.login().then((res)=>{
		expect(res).toBe(true);
  	}).catch((err)=>{
  	});
  });

  it('search for key value',()=>
  {
    page.navigateTo();
  	page.login().then((res)=>{
		page.search().then((result)=>{expect(result).toBe("sagar")}).catch((err)=>{

    })}).catch((err)=>{
  	});
  });

  it('add items',()=>
  {
    page.navigateTo();
  	page.login().then((res)=>{
		page.add().then((result)=>{expect(result).toBe("Xavier")}).catch((err)=>{

    })}).catch((err)=>{
  	});
  });

});
