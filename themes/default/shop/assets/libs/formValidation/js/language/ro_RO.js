(function($) {
    /**
     * Romanian language package
     * Translated by @filipac
     */
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        'ro_RO': {
            base64: {
                'default': 'Te rog introdu un base64 valid'
            },
            between: {
                'default': 'Te rog introdu o valoare intre %s si %s',
                notInclusive: 'Te rog introdu o valoare doar intre %s si %s'
            },
            bic: {
                'default': 'Te rog sa introduci un numar BIC valid'
            },
            callback: {
                'default': 'Te rog introdu o valoare valida'
            },
            choice: {
                'default': 'Te rog introdu o valoare valida',
                less: 'Te rog alege minim %s optiuni',
                more: 'Te rog alege maxim %s optiuni',
                between: 'Te rog alege %s - %s optiuni'
            },
            color: {
                'default': 'Te rog sa introduci o culoare valida'
            },
            creditCard: {
                'default': 'Te rog introdu un numar de card valid'
            },
            cusip: {
                'default': 'Te rog introdu un numar CUSIP valid'
            },
            cvv: {
                'default': 'Te rog introdu un numar CVV valid'
            },
            date: {
                'default': 'Te rog introdu o data valida',
                min: 'Te rog sa introduci o data dupa %s',
                max: 'Te rog sa introduci o data inainte de %s',
                range: 'Te rog sa introduci o data in intervalul %s - %s'
            },
            different: {
                'default': 'Te rog sa introduci o valoare diferita'
            },
            digits: {
                'default': 'Te rog sa introduci doar cifre'
            },
            ean: {
                'default': 'Te rog sa introduci un numar EAN valid'
            },
            ein: {
                'default': 'Te rog sa introduci un numar EIN valid'
            },
            emailAddress: {
                'default': 'Te rog sa introduci o adresa de email valide'
            },
            file: {
                'default': 'Te rog sa introduci un fisier valid'
            },
            greaterThan: {
                'default': 'Te rog sa introduci o valoare mai mare sau egala cu %s',
                notInclusive: 'Te rog sa introduci  o valoare mai mare ca %s'
            },
            grid: {
                'default': 'Te rog sa introduci un numar GRId valid'
            },
            hex: {
                'default': 'Te rog sa introduci un numar hexadecimal valid'
            },
            iban: {
                'default': 'Te rog sa introduci un IBAN valid',
                country: 'Te rog sa introduci un IBAN valid din %s',
                countries: {
                    AD: 'Andorra',
                    AE: 'Emiratele Arabe unite',
                    AL: 'Albania',
                    AO: 'Angola',
                    AT: 'Austria',
                    AZ: 'Azerbaijan',
                    BA: 'Bosnia si Herzegovina',
                    BE: 'Belgia',
                    BF: 'Burkina Faso',
                    BG: 'Bulgaria',
                    BH: 'Bahrain',
                    BI: 'Burundi',
                    BJ: 'Benin',
                    BR: 'Brazilia',
                    CH: 'Elvetia',
                    CI: 'Coasta de Fildes',
                    CM: 'Cameroon',
                    CR: 'Costa Rica',
                    CV: 'Cape Verde',
                    CY: 'Cipru',
                    CZ: 'Republica Cehia',
                    DE: 'Germania',
                    DK: 'DaneEstante',
                    DO: 'Republica Dominicană',
                    DZ: 'Algeria',
                    EE: 'Estonia',
                    ES: 'Spania',
                    FI: 'Finlanda',
                    FO: 'Insulele Faroe',
                    FR: 'Franta',
                    GB: 'Regatul Unit',
                    GE: 'Georgia',
                    GI: 'Gibraltar',
                    GL: 'Groenlanda',
                    GR: 'Grecia',
                    GT: 'Guatemala',
                    HR: 'Croatia',
                    HU: 'Ungaria',
                    IE: 'Irlanda',
                    IL: 'Israel',
                    IR: 'Iran',
                    IS: 'Islanda',
                    IT: 'Italia',
                    JO: 'Iordania',
                    KW: 'Kuwait',
                    KZ: 'Kazakhstan',
                    LB: 'Lebanon',
                    LI: 'Liechtenstein',
                    LT: 'Lithuania',
                    LU: 'Luxembourg',
                    LV: 'Latvia',
                    MC: 'Monaco',
                    MD: 'Moldova',
                    ME: 'Muntenegru',
                    MG: 'Madagascar',
                    MK: 'Macedonia',
                    ML: 'Mali',
                    MR: 'Mauritania',
                    MT: 'Malta',
                    MU: 'Mauritius',
                    MZ: 'Mozambique',
                    NL: 'Olanda',
                    NO: 'Norvegia',
                    PK: 'Pakistan',
                    PL: 'Polanda',
                    PS: 'Palestina',
                    PT: 'Portugalia',
                    QA: 'Qatar',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SA: 'Arabia Saudita',
                    SE: 'Suedia',
                    SI: 'Slovenia',
                    SK: 'Slovacia',
                    SM: 'San Marino',
                    SN: 'Senegal',
                    TL: 'Timorul de Est',
                    TN: 'Tunisia',
                    TR: 'Turkey',
                    VG: 'Insulele Virgin',
                    XK: 'Republica Kosovo'
                }
            },
            id: {
                'default': 'Te rog sa introduci un numar de identificare valid',
                country: 'Te rog sa introduci un numar de identificare valid din %s',
                countries: {
                    BA: 'Bosnia si Herzegovina',
                    BG: 'Bulgaria',
                    BR: 'Brazilia',
                    CH: 'Elvetia',
                    CL: 'Chile',
                    CN: 'China',
                    CZ: 'Republica Cehia',
                    DK: 'DaneEstante',
                    EE: 'Estonia',
                    ES: 'Spania',
                    FI: 'Finlanda',
                    HR: 'Croatia',
                    IE: 'Irlanda',
                    IS: 'Islanda',
                    LT: 'Lithuania',
                    LV: 'Latvia',
                    ME: 'Muntenegru',
                    MK: 'Macedonia',
                    NL: 'Olanda',
                    PL: 'Polanda',
                    RO: 'Romania',
                    RS: 'Serbia',
                    SE: 'Suedia',
                    SI: 'Slovenia',
                    SK: 'Slovacia',
                    SM: 'San Marino',
                    TH: 'Thailanda',
                    TR: 'Turkey',
                    ZA: 'Africa de Sud'
                }
            },
            identical: {
                'default': 'Te rog sa introduci aceeasi valoare'
            },
            imei: {
                'default': 'Te rog sa introduci un numar IMEI valid'
            },
            imo: {
                'default': 'Te rog sa introduci un numar IMO valid'
            },
            integer: {
                'default': 'Te rog sa introduci un numar valid'
            },
            ip: {
                'default': 'Te rog sa introduci o adresa IP valida',
                ipv4: 'Te rog sa introduci o adresa IPv4 valida',
                ipv6: 'Te rog sa introduci o adresa IPv6 valida'
            },
            isbn: {
                'default': 'Te rog sa introduci un numar ISBN valid'
            },
            isin: {
                'default': 'Te rog sa introduci un numar ISIN valid'
            },
            ismn: {
                'default': 'Te rog sa introduci un numar ISMN valid'
            },
            issn: {
                'default': 'Te rog sa introduci un numar ISSN valid'
            },
            lessThan: {
                'default': 'Te rog sa introduci o valoare mai mica sau egala cu %s',
                notInclusive: 'Te rog sa introduci o valoare mai mica decat %s'
            },
            mac: {
                'default': 'Te rog sa introduci o adresa MAC valida'
            },
            meid: {
                'default': 'Te rog sa introduci un numar MEID valid'
            },
            notEmpty: {
                'default': 'Te rog sa introduci o valoare'
            },
            numeric: {
                'default': 'Te rog sa introduci un numar'
            },
            phone: {
                'default': 'Te rog sa introduci un numar de telefon valid',
                country: 'Te rog sa introduci un numar de telefon valid din %s',
                countries: {
                    AE: 'Emiratele Arabe unite',
                    BG: 'Bulgaria',
                    BR: 'Brazilia',
                    CN: 'China',
                    CZ: 'Republica Cehia',
                    DE: 'Germania',
                    DK: 'DaneEstante',
                    ES: 'Spania',
                    FR: 'Franta',
                    GB: 'Regatul Unit',
                    IN: 'India',
                    MA: 'Maroc',
                    NL: 'Olanda',
                    PK: 'Pakistan',
                    RO: 'Romania',
                    RU: 'Rusia',
                    SK: 'Slovacia',
                    TH: 'Thailanda',
                    US: 'SUA',
                    VE: 'Venezuela'
                }
            },
            promise: {
                'default': 'Te rog introdu o valoare valida'
            },
            regexp: {
                'default': 'Te rog sa introduci o valoare in formatul'
            },
            remote: {
                'default': 'Te rog sa introduci o valoare valida'
            },
            rtn: {
                'default': 'Te rog sa introduci un numar RTN valid'
            },
            sedol: {
                'default': 'Te rog sa introduci un numar SEDOL valid'
            },
            siren: {
                'default': 'Te rog sa introduci un numar SIREN valid'
            },
            siret: {
                'default': 'Te rog sa introduci un numar SIRET valid'
            },
            step: {
                'default': 'Te rog introdu un pas de %s'
            },
            stringCase: {
                'default': 'Te rog sa introduci doar litere mici',
                upper: 'Te rog sa introduci doar litere mari'
            },
            stringLength: {
                'default': 'Te rog sa introduci o valoare cu lungimea valida',
                less: 'Te rog sa introduci mai putin de %s caractere',
                more: 'Te rog sa introduci mai mult de %s caractere',
                between: 'Te rog sa introduci o valoare cu lungimea intre %s si %s caractere'
            },
            uri: {
                'default': 'Te rog sa introduci un URI valid'
            },
            uuid: {
                'default': 'Te rog sa introduci un numar UUID valid',
                version: 'Te rog sa introduci un numar UUID versiunea %s valid'
            },
            vat: {
                'default': 'Te rog sa introduci un numar TVA valid',
                country: 'Te rog sa introduci un numar TVA valid din %s',
                countries: {
                    AT: 'Austria',
                    BE: 'Belgia',
                    BG: 'Bulgaria',
                    BR: 'Brazilia',
                    CH: 'Elvetia',
                    CY: 'Cipru',
                    CZ: 'Republica Cehia',
                    DE: 'Germania',
                    DK: 'DaneEstante',
                    EE: 'Estonia',
                    ES: 'Spania',
                    FI: 'Finlanda',
                    FR: 'Franta',
                    GB: 'Regatul Unit',
                    GR: 'Grecia',
                    EL: 'Grecia',
                    HU: 'Ungaria',
                    HR: 'Croatia',
                    IE: 'Irlanda',
                    IS: 'Islanda',
                    IT: 'Italia',
                    LT: 'Lituania',
                    LU: 'Luxemburg',
                    LV: 'Latvia',
                    MT: 'Malta',
                    NL: 'Olanda',
                    NO: 'Norvegia',
                    PL: 'Polanda',
                    PT: 'Portugalia',
                    RO: 'Romania',
                    RU: 'Rusia',
                    RS: 'Serbia',
                    SE: 'Suedia',
                    SI: 'Slovenia',
                    SK: 'Slovacia',
                    VE: 'Venezuela',
                    ZA: 'Africa de Sud'
                }
            },
            vin: {
                'default': 'Te rog sa introduci un numar VIN valid'
            },
            zipCode: {
                'default': 'Te rog sa introduci un cod postal valid',
                country: 'Te rog sa introduci un cod postal valid din %s',
                countries: {
                    AT: 'Austria',
                    BG: 'Bulgaria',
                    BR: 'Brazilia',
                    CA: 'Canada',
                    CH: 'Elvetia',
                    CZ: 'Republica Cehia',
                    DE: 'Germania',
                    DK: 'DaneEstante',
                    ES: 'Spania',
                    FR: 'Franta',
                    GB: 'Regatul Unit',
                    IE: 'Irlanda',
                    IN: 'India',
                    IT: 'Italia',
                    MA: 'Maroc',
                    NL: 'Olanda',
                    PL: 'Polanda',
                    PT: 'Portugalia',
                    RO: 'Romania',
                    RU: 'Rusia',
                    SE: 'Suedia',
                    SG: 'Singapore',
                    SK: 'Slovacia',
                    US: 'SUA'
                }
            }
        }
    });
}(jQuery));
