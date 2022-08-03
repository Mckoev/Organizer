import {URL_WEATHER, TOKEN, METHODS, URL_HOME} from './API'
import {store} from '../reduxToolkit/store'
import {weatherAction} from '../reduxToolkit/toolkitSliceWeatherForOneDay'
import {daysAction} from '../reduxToolkit/toolkitSliceWeatherForManyDays'

export function getWeatherForManyDays(location: string): void {
    if (!location) {
        location = 'Moscow'
    }
    const responce = fetch(URL_WEATHER, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            days: 7,
            location: location,
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${URL_HOME}, received ${response.status}`)
            }
            return response.json()
        })
        .then((result) => {
            store.dispatch(daysAction(result.forecast))
        })
        .catch((err) => {
            console.error('Could not fetch ' +  err)
        })
}