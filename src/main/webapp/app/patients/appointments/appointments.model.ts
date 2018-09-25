import {  User } from '../../core/index';

export class Appointment  {
    constructor(
        public id?: number,
        public reason?: string,
        public insuranceChange?: boolean,
        public phoneNumber?: string,
        public userAppointment?: User,
    ) {
        this.insuranceChange = false;
    }
}
