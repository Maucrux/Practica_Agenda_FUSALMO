import { createSlice } from "@reduxjs/toolkit";
import { addHours, getTime } from "date-fns";


const tempEvent = {
    _id: new Date().getTime(),
    title: 'Fiesta de Cumpleaños',
    notes: 'Decorar bonito',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user:{
        id: '6624',
        name: 'Maury'
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },

    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map( event => {
                if (event._id === payload._id){
                    return payload
                }

                return event
            })
        },
        onDeleteEvent: (state) => {
            if ( state.activeEvent ){
                state.events = state.events.filter( event => event._id !== state.activeEvent._id )
                state.activeEvent = null
            }
        }
    }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
