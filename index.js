// @flow
import da from './text_strings/client/da.json'
import fi from './text_strings/client/fi.json'
import is from './text_strings/client/is.json'
import sv from './text_strings/client/sv.json'
import fr from './text_strings/client/fr.json'
import nl from './text_strings/client/nl.json'
import no from './text_strings/client/nb.json'
import en from './text_strings/client/en.json'
import be from './text_strings/client/be.json'
import it from './text_strings/client/it.json'
import es from './text_strings/client/es.json'
import de from './text_strings/client/de.json'
import et from './text_strings/client/et.json'

import _default from './text_strings/client/default.json'
import CountryCodes from './CountryCodes.json'
import Regions from './Regions.json'
import Cities from './Cities.json'
import Timezones from './TimeZones.json'
import LanguageCodes from './LanguageCodes.json'
import countryCodes2PhoneNumberPrefixes from './countryCodes2PhoneNumberPrefixes.json'
import DefaultCurrencies from './DefaultCurrencies'
export var supportedLanguageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']
export var supportedTimeZonesAndroid =
  ['Europe/Stockholm', 'Europe/Oslo', 'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Prague', 'Europe/London', 'America/New_York', 'America/Los_Angeles',
    'America/Vancouver', 'America/Panama', 'Pacific/Guam', 'Pacific/Palau', 'America/Puerto_Rico', 'Africa/Windhoek', 'Australia/Sydney', 'America/Toronto',
    'Pacific/Auckland', 'Asia/Calcutta', 'Africa/Cairo']
export var languageCodes = ['da', 'fi', 'is', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']

export let getSupportedCurrencyInfos = (): Array<{code: string, name: string}> => [
  {code: 'SEK', name: 'Swedish Krona'},
  {code: 'NOK', name: 'Norwegian Krone'},
  {code: 'DKK', name: 'Danish Krone'},
  {code: 'GBP', name: 'Pound Sterling'},
  {code: 'USD', name: 'US Dollar'},
  {code: 'EUR', name: 'Euro'},
  {code: 'AUD', name: 'Australian Dollar'},
  {code: 'CAD', name: 'Canadian Dollar'},
  {code: 'NZD', name: 'New Zealand Dollar'},
  {code: 'INR', name: 'Indian Rupee'},
  {code: 'ZAR', name: 'Rand'},
  {code: 'ISK', name: 'Iceland Krona'}

]

export let getTextStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'da' : return {..._default, ...da} // danish
    case 'sv' : return {..._default, ...sv} // sweden
    case 'nb' :
    case 'nn' : return {..._default, ...no} // norway
    case 'fr' : return {..._default, ...fr} // france
    case 'nl' : return {..._default, ...nl} // Netherlands
    case 'be' : return {..._default, ...be} // belgian
    case 'fi' : return {..._default, ...fi} // finish
    case 'it' : return {..._default, ...it} // italian
    case 'es' : return {..._default, ...es} // spanish
    case 'de' : return {..._default, ...de} // german
    case 'is' : return {..._default, ...is} // island
    case 'et' : return {..._default, ...et} // Estonia
    default : return {..._default, ...en}
  }
}

export let getRegions = () => { return Regions }
export let getCities = () => { return Cities }

export let getCountries = () => CountryCodes
export let getCountry = (countryCode: string) => CountryCodes.find(country => country.code === countryCode)
export let getPhoneNumberPrefix = (countryCode: string) => parseInt(countryCodes2PhoneNumberPrefixes[countryCode.toUpperCase()])
export let getCountryCodeFromLocale = (locale: string) => locale.slice(-2)
export let getTimezones = () => Timezones
export let getLangugageCodes = () => LanguageCodes.filter(languageCode => supportedLanguageCodes.indexOf(languageCode.code) !== -1)
export let getDefaultCurrencyCode = (userCountryCode: string): string => DefaultCurrencies[userCountryCode] || 'EUR'

export let getSupportedTimeZones = () => {
  var shortList = []
  Timezones.map((zone, index) => {
    if (supportedTimeZonesAndroid.indexOf(zone.value) !== -1) {
      shortList.push(zone)
    }
  })
  return shortList || Timezones
}
