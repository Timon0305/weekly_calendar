import { addDays, addHours, endOfDay, endOfMonth, startOfDay, subDays } from 'date-fns';

export class CalendarFakeDb
{

    public static data = [
        {
            id  : 'events',
            data: [
                {
                    start    : subDays(startOfDay(new Date()), 1),
                    end      : addDays(new Date(), 1),
                    title    : 'Meeting',
                    allDay   : true,
                    color    : {
                        primary  : '#F44336',
                        secondary: 'rgba(59,130,246,0.5)'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Singapoor',
                        notes   : 'About Angular.'
                    }
                },
                {
                    start    : startOfDay(new Date()),
                    end      : endOfDay(new Date()),
                    title    : 'Zoom Call with Client',
                    allDay   : false,
                    color    : {
                        primary  : '#FF9800',
                        secondary: '#3b82f6'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'UpWork',
                        notes   : 'Testing developers.'
                    }
                },
                {
                    start    : subDays(endOfMonth(new Date()), 3),
                    end      : addDays(endOfMonth(new Date()), 3),
                    title    : 'A long event that spans 2 months',
                    allDay   : false,
                    color    : {
                        primary  : '#1E90FF',
                        secondary: '#D1E8FF'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                },
                {
                    start    : addHours(startOfDay(new Date()), 2),
                    end      : new Date(),
                    title    : 'A draggable and resizable event',
                    allDay   : false,
                    color    : {
                        primary  : '#673AB7',
                        secondary: 'pink'
                    },
                    resizable: {
                        beforeStart: true,
                        afterEnd   : true
                    },
                    draggable: true,
                    meta     : {
                        location: 'Los Angeles',
                        notes   : 'Eos eu verear adipiscing, ex ornatus denique iracundia sed, quodsi oportere appellantur an pri.'
                    }
                }
            ]
        }
    ];
}
