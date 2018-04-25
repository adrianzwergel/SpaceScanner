import { Injectable } from '@angular/core';

@Injectable()
export class RobotService {

  public Scans: any = [
    {
      id: 1,
      start: new Date(),
      end: null,
      images: [
        {
          id: 1,
          path: "/images/1.jpg",
          delay: 100,
          position: {
            x: 10,
            y: 20,
            angle: 0,
            camAngle: 5
          }
        },
        {
          id: 2,
          path: "/images/2.jpg",
          delay: 200,
          position: {
            x: 10,
            y: 20,
            angle: 0,
            camAngle: 10
          }
        }
      ]
    },
    {
      id: 2,
      start: new Date(),
      end: null,
      images: [
        {
          id: 3,
          path: "/images/3.jpg",
          delay: 100,
          position: {
            x: 60,
            y: 20,
            angle: 0,
            camAngle: 5
          }
        },
        {
          id: 4,
          path: "/images/4.jpg",
          delay: 200,
          position: {
            x: 60,
            y: 20,
            angle: 0,
            camAngle: 10
          }
        }
      ]
    }]

  constructor() { }



}
