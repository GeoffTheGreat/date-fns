import type { Day, Era, Month, Quarter } from '../../../../types'
import type { LocaleDayPeriod, QuarterIndex } from '../../../types'
import buildLocalizeFn, {
  LocalizePeriodValuesMap,
} from '../../../_lib/buildLocalizeFn/index'

export type hiLocaleNumberType =
  | '\u0967'
  | '\u0968'
  | '\u0969'
  | '\u096A'
  | '\u096B'
  | '\u096C'
  | '\u096D'
  | '\u096E'
  | '\u096F'
  | '\u0966'

export type enLocaleNumberType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'

export type enHiLocaleNumberType = {
  [enNumber in enLocaleNumberType]: hiLocaleNumberType
}

export type hiLocaleEnNumberType = {
  [hiNumber in hiLocaleNumberType]: enLocaleNumberType
}

export interface hiLocaleNumberValuesType {
  locale: enHiLocaleNumberType
  number: hiLocaleEnNumberType
}

const numberValues: hiLocaleNumberValuesType = {
  locale: {
    '1': '१',
    '2': '२',
    '3': '३',
    '4': '४',
    '5': '५',
    '6': '६',
    '7': '७',
    '8': '८',
    '9': '९',
    '0': '०',
  },
  number: {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0',
  },
}

// CLDR #1585 - #1592
const eraValues: LocalizePeriodValuesMap<Era> = {
  narrow: ['ईसा-पूर्व', 'ईस्वी'],
  abbreviated: ['ईसा-पूर्व', 'ईस्वी'],
  wide: ['ईसा-पूर्व', 'ईसवी सन'],
}

// CLDR #1593 - #1616
const quarterValues: LocalizePeriodValuesMap<Quarter> = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['ति1', 'ति2', 'ति3', 'ति4'],
  wide: ['पहली तिमाही', 'दूसरी तिमाही', 'तीसरी तिमाही', 'चौथी तिमाही'],
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
// https://www.unicode.org/cldr/charts/32/summary/hi.html
// CLDR #1617 - #1688
const monthValues: LocalizePeriodValuesMap<Month> = {
  narrow: [
    'ज',
    'फ़',
    'मा',
    'अ',
    'मई',
    'जू',
    'जु',
    'अग',
    'सि',
    'अक्टू',
    'न',
    'दि',
  ],
  abbreviated: [
    'जन',
    'फ़र',
    'मार्च',
    'अप्रैल',
    'मई',
    'जून',
    'जुल',
    'अग',
    'सित',
    'अक्टू',
    'नव',
    'दिस',
  ],
  wide: [
    'जनवरी',
    'फ़रवरी',
    'मार्च',
    'अप्रैल',
    'मई',
    'जून',
    'जुलाई',
    'अगस्त',
    'सितंबर',
    'अक्टूबर',
    'नवंबर',
    'दिसंबर',
  ],
}

// CLDR #1689 - #1744
const dayValues: LocalizePeriodValuesMap<Day> = {
  narrow: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  short: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
  abbreviated: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
  wide: [
    'रविवार',
    'सोमवार',
    'मंगलवार',
    'बुधवार',
    'गुरुवार',
    'शुक्रवार',
    'शनिवार',
  ],
}

const dayPeriodValues: LocalizePeriodValuesMap<LocaleDayPeriod> = {
  narrow: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
  abbreviated: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
  wide: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
  abbreviated: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
  wide: {
    am: 'पूर्वाह्न',
    pm: 'अपराह्न',
    midnight: 'मध्यरात्रि',
    noon: 'दोपहर',
    morning: 'सुबह',
    afternoon: 'दोपहर',
    evening: 'शाम',
    night: 'रात',
  },
}

function ordinalNumber(dirtyNumber: string) {
  var number = localize.localeToNumber(dirtyNumber)
  var localeNumber = localize.numberToLocale(number)

  var rem10 = number % 10
  switch (rem10) {
    case 2:
    case 3:
    case 4:
    case 6:
    case 1:
    case 5:
    case 7:
    case 8:
    case 9:
    case 0:
      return localeNumber
  }
}

function localeToNumber(locale: string): number {
  const enNumber = locale.toString().replace(/[१२३४५६७८९०]/g, function (match) {
    return numberValues.number[match as hiLocaleNumberType]
  })
  return Number(enNumber)
}

function numberToLocale(enNumber: number) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match as enLocaleNumberType]
  })
}

const localize = {
  localeToNumber: localeToNumber,
  numberToLocale: numberToLocale,
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn<Era, undefined>({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter: Quarter) {
      return (Number(quarter) - 1) as QuarterIndex
    },
  }),

  month: buildLocalizeFn<Month, undefined>({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn<Day, undefined>({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn<LocaleDayPeriod, undefined>({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize