import {URL_HOME, TOKEN, INITIAL_CITY, CITY, LOCATION, LATITUDE, LONGITUDE} from './weatherApiData'
import {store} from '../../reduxToolkit/store'
import {weatherAction} from '../../reduxToolkit/toolkitSliceWeatherForOneDay'
import {isLoadingWeatherForOneDay} from '../../reduxToolkit/toolkitSliceIsLoading'
import {METHODS} from "../methods";

export function getWeatherForOneDay(): void {
    let location: string | null = localStorage.getItem(CITY)

    if (!location) {
        location = INITIAL_CITY
    }
    fetch(URL_HOME, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
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
            localStorage.setItem(LOCATION, result.country)
            localStorage.setItem(LATITUDE, result.latitude)
            localStorage.setItem(LONGITUDE, result.longitude)
            store.dispatch(weatherAction(result))
            store.dispatch(isLoadingWeatherForOneDay(
                {
                    'isLoadingWeatherForOneDay': false,
                }))
        })
        .catch((err) => {
            console.error('Could not fetch ' + err)
        })
}