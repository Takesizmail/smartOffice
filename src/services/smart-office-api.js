class SmartOfficeApi {
    api_floors = {
        "isOperationSuccessfull": true,
        "data": [
            {
                "floorId": 1,
                "unitName": "Building",
                "departmentName": "IF",
                "floor": "3",
                "svgId": 1
            },
            {
                "floorId": 2,
                "unitName": "Building",
                "departmentName": "IF",
                "floor": "4",
                "svgId": 2
            },
            {
                "floorId": 3,
                "unitName": "Building",
                "departmentName": "IF",
                "floor": "99",
                "svgId": 3
            }
        ]
    };

    // floor_3
    api_floor_1_rooms = {
        "isOperationSuccessfull": true,
        "data": [
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "301",
                "roomId": 1,
                "svgId": 4,
                "hasSensor": true
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "English Room",
                "roomId": 2,
                "svgId": 5,
                "hasSensor": false
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "Head Office",
                "roomId": 3,
                "svgId": 6,
                "hasSensor": false
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "System Administrator",
                "roomId": 4,
                "svgId": 7,
                "hasSensor": false
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "Kitchen",
                "roomId": 5,
                "svgId": 8,
                "hasSensor": false
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "Training Room",
                "roomId": 6,
                "svgId": 9,
                "hasSensor": false
            },
            {
                "unitName": "Building",
                "floor": "3",
                "roomName": "302",
                "roomId": 7,
                "svgId": 10,
                "hasSensor": true
            }
        ]
    };
    // floor_4
    api_floors_2_rooms = {
        "isOperationSuccessfull": true,
        "data": [
            {
                "unitName": "Building",
                "floor": "4",
                "roomName": "401",
                "roomId": 8,
                "svgId": 11,
                "hasSensor": true
            },
            {
                "unitName": "Building",
                "floor": "4",
                "roomName": "402",
                "roomId": 9,
                "svgId": 12,
                "hasSensor": true
            },
            {
                "unitName": "Building",
                "floor": "4",
                "roomName": "403",
                "roomId": 10,
                "svgId": 13,
                "hasSensor": true
            }
        ]
    };
    api_room_1 = {
        "isOperationSuccessfull": true,
        "data": {
            "roomName": "301",
            "roomDescription": "Aon Room",
            "svgId": 4,
            "floorId": 1,
            "floor": "3",
            "unitName": "Building",
            "unitId": "1"
        }
    };
    api_rooms_1_sensors={
        "isOperationSuccessfull": true,
        "data": [
            {
                "locationX": 0,
                "locationY": 0,
                "moduleId": 15655373,
                "sensorId": 0,
                "valueTypes": [0]
            },
            {
                "locationX": 0,
                "locationY": 0,
                "moduleId": 15655373,
                "sensorId": 10,
                "valueTypes": [2, 0]
            },
            {
                "locationX": 0,
                "locationY": 0,
                "moduleId": 15655373,
                "sensorId": 15,
                "valueTypes": [1]
            }
        ]
    };
    api_rooms_8 ={
        "isOperationSuccessfull": true,
        "data": {
            "roomName": "401",
            "roomDescription": "Tiva Room",
            "svgId": 11,
            "floorId": 2,
            "floor": "4",
            "unitName": "Building",
            "unitId": "1"
        }
    };
    api_rooms_8_sensors={
        "isOperationSuccessfull": true,
        "data": [
            {
                "locationX": 0,
                "locationY": 0,
                "moduleId": 8909838,
                "sensorId": 10,
                "valueTypes": [2, 0]
            },
            {
                "locationX": 0,
                "locationY": 0,
                "moduleId": 8909838,
                "sensorId": 15,
                "valueTypes": [1]
            }
        ]
    };

    getApi_floors = () =>{

        return new Promise(resolve => {
            resolve (this.api_floors)
        })
    };
    getApi_rooms = (number) =>{
        console.log(number);
        const element = number === '8' ? this.api_rooms_8 : this.api_room_1;
        console.log(element);
        return new Promise(resolve => {
            resolve (element)
        })
    }

}

export default SmartOfficeApi