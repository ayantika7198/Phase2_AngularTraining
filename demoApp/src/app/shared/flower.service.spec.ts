import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { flush, getTestBed, inject, TestBed } from "@angular/core/testing";
import { IFlower } from "../flowers/flower";
import { FlowerService } from "./flower.service";

describe('FlowerService',()=>{
    let service:FlowerService;
    let injector: TestBed;

  let httpMock: HttpTestingController;
  let flowers:IFlower[]=[];

  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[FlowerService],
     });
     service=TestBed.get(FlowerService);
     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);

    flowers=[
      {
        id: "F001",
        name: "Rose",
        place: "Kolkata",
        price: 200,
        image: "../../assets/images/rose.jpg",
        quantity: 50
      },
      {
        id: "F002",
        name: "Daffodil",
        place: "Pune",
        price: 850,
        image: "../../assets/images/daffodil.jpg",
        quantity: 30
      },
      {
        id: "F003",
        name: "Lily",
        place: "Delhi",
        price: 500,
        image: "../../assets/images/lily.jpg",
        quantity: 60
      },
      {
        id: "F004",
        name: "Lotus",
        place: "Kolkata",
        price: 700,
        image: "../../assets/images/lotus.jpg",
        quantity: 100
      },
      {
        id: "F005",
        name: "Sunflower",
        place: "Ahmedabad",
        price: 900,
        image: "../../assets/images/sunflower.jpg",
        quantity: 90
      },
      {
        id: "F006",
        name: "Tulip",
        place: "Jaipur",
        price: 400,
        image: "../../assets/images/tulip.jpg",
        quantity: 9
      }
    ];

  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  });

  it('should check getFlowers() method',inject([HttpTestingController,FlowerService],
    (httpMock:HttpTestingController,service:FlowerService)=>{

          service.getFlowers().subscribe(resp=>expect(flowers).toEqual(resp));

          const mockReq = httpMock.expectOne(service.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(flowers);

        httpMock.verify();


  }));

  it('should check createFlower() method',()=>{
    let flower1:IFlower={
      id: "F007",
      name: "Marrygold",
      place: "Jaipur",
      price: 500,
      image: "../../assets/images/tulip.jpg",
      quantity: 90
    };
    let flower2:IFlower={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    flowers=[...flowers,flower1];

    //service.createFlower(flower1).subscribe(resp=>expect(JSON.parse(JSON.stringify(resp))).toEqual(JSON.parse(JSON.stringify(flower1))) );
    //service.createFlower(flower2).subscribe(resp=>expect(resp).toEqual(flower2));

    service.createFlower(flower1).subscribe(resp=>expect(resp).toEqual(flower1));

     expect(flowers.length).toEqual(7);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     req.flush(flower1);
  });

  it('should check the updateFlower() method',()=>{
    let flower2={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    service.updateFlower(flower2).subscribe(resp=>expect((resp)).toEqual(flower2));


       const req = httpMock.expectOne(`${service.url}/${flower2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({flower2 });
  });

  it('should check the deleteFlower() method',()=>{

    let flower1:IFlower={
      id: "F007",
      name: "Marrygold",
      place: "Jaipur",
      price: 500,
      image: "../../assets/images/tulip.jpg",
      quantity: 90
    };

    let flower2={
      id: "F008",
      name: "Tulip",
      place: "Jaipur",
      price: 400,
      image: "../../assets/images/tulip.jpg",
      quantity: 70
    };

    flowers=[...flowers,flower1,flower2];

    service.deleteFlower(`${flower2.id}`).subscribe(resp=>console.log(resp));

    expect(flowers.length).toEqual(8);

    const req = httpMock.expectOne(`${service.url}/${flower2.id}`);
     expect(req.request.method).toBe('DELETE');
     req.flush(flower2);
     
    

  });
});