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

//Handling Exceptions
try {
list.push('Hello');
} catch (err) {
    console.log(err);
    }
//not for surrounding code due to poor coding its for exceptions we don't have control of or using someone's libraries. 
    console.log('Goodbye');

//menu drivin app example

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        }else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }


describe(){
    return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeams = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch (selection) {
                case '1' :
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }

    alert('Goodbye!');
    }

    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new team
        2) view team
        3) delete team
        4) display all teams
        `);
    }

    showTeamMenuOptions(teamInfo){
        return prompt(`
        0) back
        1) create player
        2) delete player
        -----------------
        ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i +') ' + this.teams [i].name + '\n'; // '\n' = new line
        }
        alert(teamString);
    }

    createTeam(){
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
           this.selectedTeam = this.teams[index];
           let description = 'Team Name: ' + this.selectedTeam.name + '\n';
           
           for (let i = 0; i < this.selectedTeam.players.length; i++) {
            description =+ i + ') ' + this.selectedTeam.players[i].position + ' - ' + this.selectedTeam.players[i].position + '\n';
        }
        
        let selection = this.showTeamMenuOptions(description);
        switch (selection) {
            case '1':
                this.createPlayer();
                break;
            case '2':
                this.deletePlayer();
            }
        }
    }
    deleteTeam() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index >-1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

createPlayer(){
    let name = prompt('Enter name for new player:');
    let position = prompt('Enter position for new player');
    this.selectedTeam.players.push(new Player(name, position));
}

deletePlayer(){
    let index = ('Enter the index of the player you wish to delete:');
    if (index > -1 && index < this.selectedTeam.players.length) {
        this.selectedTeam.players.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start();