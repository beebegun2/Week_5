//Classes
class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`)
    }
}
//this would be a lot more codeing if done this way
//let student = new Student();
//student.firstName = 'Tommy';
//student.lastName = 'Antley';

let student1 = new Student('Tom', 'Sawyer', '5415217109', 'A')
let student2 = new Student('Shannon','Beebe', '5415210416', 'B');

student1.introduce();
student2.introduce();

//Inheritance
class NotificationSender {
    constructor(status) {
        this.status = status;
    }

    sendNotification(notification) {
        console.log('Sending: ' + notification);
    }
}


class PromotionSender extends NotificationSender {
    constructor(status){
        super(status);
    }
// We no longer need the commented out portion if we use the line 25-30 information rather than doing each one individually aka.. lines 38-44 & 61-68 
//    sendNotification(notification){
//        console.log('Sending: ' + notification);
//        }
//    findUsersWithStatus(status) {
//        let users = getUsers(status)
//       return users;
//   }
    
    calculateDiscount(status) {
        if (status === 'GOLD') {
            return .3;
        } else if (status === 'SILVER') {
            return .15;
        }
         return 0;
    }
}

class CollectionsSender extends NotificationSender{
    constructor(status) {
        super(status); //super is calling the parent class we inherit from must be called from the extends 
    }

//    sendNotification(notification) {
//        console.log('Sending: ' + notification);
//    }
//
//    findUsersWithStatus(status) {
//        let users = getUsers(status);
//        return users;
//    }

    calculateFee(status) {
        if (status === 'OVERDUE') {
            return 10;
        } else if(status === 'DELINQUENT') {
            return 25;
        }
        return 5;
    }
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification.');