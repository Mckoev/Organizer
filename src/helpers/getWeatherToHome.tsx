import {URL_HOME, TOKEN, METHODS} from "./API";
import {store} from "../reduxToolkit/store";
import {conditionAction, countryAction, iconAction, locationAction, tempAction} from "../reduxToolkit/toolkitSlice";


export function  getWeatherToHome(location: string): void {
    if (!location) {
        location = 'Moscow'
    }
    const responce = fetch(URL_HOME, {
        method: METHODS.POST,
        headers: {
            'Content-Type': `application/json`,
            'Authorization': `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            "location": location
        })
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            store.dispatch(iconAction(result.icon_url))
            store.dispatch(conditionAction(result.condition))
            store.dispatch(tempAction(result.temp_c))
            store.dispatch(locationAction(result.location))
            store.dispatch(countryAction(result.country))
        })
}










