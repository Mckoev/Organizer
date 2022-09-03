import { useState } from 'react';
import { tasksCalendar } from '../../mock/mock';
import { months } from '../../helpers/dateValue';

function PanelCalendarHome() {
    const [value, onChange] = useState(new Date());

    const calendarEvent = 'calendarEvent';
    const dateValue = `${value.getDate()} ${
        months[value.getMonth()]
    } ${value.getFullYear()}`;

    const initialValue = localStorage.getItem(calendarEvent);

    let initialTasks = {};
    if (initialValue) {
        initialTasks = JSON.parse(initialValue);
    } else {
        initialTasks[dateValue] = tasksCalendar;
    }

    const [tasks, setTasks] = useState(initialTasks);
    const list = tasks[dateValue];

    const listItems = list
        ? list.slice(0, 3).map((el, index) => (
              <li key={index}>
                  <div className='time'>
                      {el.timeStart} - {el.timeFinish}
                  </div>
                  <div className='title'>{el.task}</div>
              </li>
          ))
        : null;

    const isManyTasks = list
        ? list.length - list.slice(0, 3).length > 0
        : false;

    const isTasksToday = !!list && list.length !== 0;

    return (
        <div className='panel panel-calendar'>
            <ul>
                {listItems}
                {isManyTasks ? (
                    <li className='other'>
                        <div className='plus' />
                        <div className='title'>
                            ... and {list.length - list.slice(0, 3).length}{' '}
                            other tasks
                        </div>
                    </li>
                ) : (
                    <></>
                )}
                {isTasksToday ? (
                    <></>
                ) : (
                    <li className='other'>
                        <div className='title'> Нет задач на сегодня!</div>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PanelCalendarHome;
