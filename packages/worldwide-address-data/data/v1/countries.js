export default {
  "AC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "AD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(AD-?)?[1-7]\\d{2}$",
      "example": "AD100"
    }
  },
  "AE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true
  },
  "AF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^([1-3]\\d{3}|4[0-3][0-6]\\d)$",
      "example": "1001"
    }
  },
  "AG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "AI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "AL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(AL-?)?\\d{4}$",
      "example": "1001"
    }
  },
  "AM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^([0-3]\\d{3}|4[0-2]\\d{2})$",
      "example": "0001"
    }
  },
  "AO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "AR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^[A-Z]?\\d{4}([A-Z]{3})?$",
      "example": "C1070AAM"
    }
  },
  "AT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((AT?( |-)?)?[1-9]\\d{3})$",
      "example": "1010"
    }
  },
  "AU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(?!2899|679[89])(\\d{4})$",
      "example": "2060"
    }
  },
  "AW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "AX": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(AX-?)?22\\d{3}$",
      "example": "22150"
    }
  },
  "AZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((AZ[ -]?)?(0[1-9]|[1-6][0-9]|7[0-4]|80)\\d{2})$",
      "example": "1000"
    }
  },
  "BA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((BA|BIH)-?)?(7\\d{4}|(80|88|89)\\d{3})$",
      "example": "71000"
    }
  },
  "BB": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(BB-?)?\\d{5,5}$",
      "example": "BB15028"
    }
  },
  "BD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(1[0-9]|2[0-4]|3[0-9]|4[0-7]|5[0-9]|6[0-7]|7[0-9]|8[0-7]|9[0-4])\\d{2}$",
      "example": "1340"
    }
  },
  "BE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(BE?( |-)?)?[1-9]\\d{3}$",
      "example": "4000"
    }
  },
  "BF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-9]\\d{4}$",
      "example": "10010"
    }
  },
  "BG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(BG-?)?[1-9]\\d{3}$",
      "example": "1000"
    }
  },
  "BH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(0?[1-9]\\d{2}|1[0-2]\\d{2})$",
      "example": "317"
    }
  },
  "BI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BJ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(BL-?)?(97133|9709\\d)$",
      "example": "97091"
    }
  },
  "BM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(CR|DD|DV|FL|GE|HM|HS|MA|PG|SB|SN|WK) ?([0-9]{2}|[A-Z]{2})$",
      "example": "FL 07"
    }
  },
  "BN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[BKTP][A-Z]\\d{4}$",
      "example": "BT2328"
    }
  },
  "BO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BQ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "zip"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{5}(-?\\d{3})?$",
      "example": "22290175"
    }
  },
  "BS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(1[1-6]|2[1-2]|3[1-6]|4[1-8])\\d{3}$",
      "example": "11001"
    }
  },
  "BV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "BW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "BY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(BY-?)?2[0-4]\\d{4}$",
      "example": "223016"
    }
  },
  "BZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^[A-Za-z]\\d[A-Za-z]\\s*\\d[A-Za-z]\\d$",
      "example": "K1P 1J1"
    }
  },
  "CC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((CH( |-)?)?(([1-8]\\d{3})|(9[012356789]\\d{2})|(94[01234567]\\d)))$",
      "example": "2544"
    }
  },
  "CI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "8340457"
    }
  },
  "CM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{6}$",
      "example": "266033"
    }
  },
  "CO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "111221"
    }
  },
  "CR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "province",
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "10108"
    }
  },
  "CU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "80100"
    }
  },
  "CV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "7600"
    }
  },
  "CW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CX": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "CY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(CY-?)?[1-9]\\d{3}$",
      "example": "2008"
    }
  },
  "CZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((CZ( |-)?)?[1-7]\\d{2} ?\\d{2})$",
      "example": "100 00"
    }
  },
  "DE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(DE?-?)?\\d{5}$",
      "example": "56068"
    }
  },
  "DJ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "DK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(DK( |-)?)?(?!38\\d{2}|39\\d{2})((0[89]\\d{2})|([1-9]\\d{3}))$",
      "example": "8660"
    }
  },
  "DM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "DO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "11903"
    }
  },
  "DZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "40304"
    }
  },
  "EC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "090105"
    }
  },
  "EE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(E(E|ST)-?)?[1-9]\\d{4}$",
      "example": "69501"
    }
  },
  "EG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "12411"
    }
  },
  "EH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "70000"
    }
  },
  "ER": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "ES": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(ES?-?)?[0-5]\\d{4}$",
      "example": "28039"
    }
  },
  "ET": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^([1-6]\\d|7[0-2])\\d{2}$",
      "example": "1000"
    }
  },
  "FI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(FI-?)?(?!22\\d{3})(\\d{5})$",
      "example": "00550"
    }
  },
  "FJ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "FK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "FO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(FO-?)?[1-9]\\d{2}$",
      "example": "100"
    }
  },
  "FR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((FR?( |-)?)?([0-8]\\d{4})|([0-9][01234569]\\d{3}))$",
      "example": "34000"
    }
  },
  "GA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "GB": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[A-Za-z]{1,2}(\\d[A-Za-z]?|\\d\\d)\\s?\\d[A-Za-z]{2}$",
      "example": "SE22 8DL"
    }
  },
  "GD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "GE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{4}(\\d{2})?$",
      "example": "0101"
    }
  },
  "GF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(GF-?)?973\\d{2}$",
      "example": "97300"
    }
  },
  "GG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^GY([1-9]|10) [0-9][A-Z][A-Z]$",
      "example": "GY1 1AA"
    }
  },
  "GH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((A[23467A-Z])|(B[23A-Z])|(C[A-X])|(E[23A-Z])|(G[A-Z])|(N[2345A-Z])|(U[ABGKLNOPRSTUW])|(X[DJKLNOSTWXY])|(V[A-Z])|(W[A-Z]))(-?\\d{3}\\d?\\d?(-?\\d{4})?)?$",
      "example": "GA-120-9182"
    }
  },
  "GI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country"
    ],
    "hasZones": false
  },
  "GL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(GL-?)?39\\d{2}$",
      "example": "3911"
    }
  },
  "GM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "GN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "011"
    }
  },
  "GP": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(GP-?)?(?!97133|97150)(971\\d{2})$",
      "example": "97100"
    }
  },
  "GQ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "GR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((GR( |-)?)?[1-8]\\d{2} ?\\d{2})$",
      "example": "151 24"
    }
  },
  "GS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country"
    ],
    "hasZones": false
  },
  "GT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "09001"
    }
  },
  "GW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "1000"
    }
  },
  "GY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "HK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true
  },
  "HM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "HN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "31301"
    }
  },
  "HR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((HR( |-)?)?[1-5]\\d ?\\d{3})$",
      "example": "10000"
    }
  },
  "HT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(HT ?)?(1[1-7]|2[1-4]|3[1-3]|4[1-5]|5[1-4]|6[1-5]|7[1-5]|8[1-5]|9[1-3])\\d{2}$",
      "example": "HT6120"
    }
  },
  "HU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "zip",
        "city"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(HU?-?)?[1-9]\\d{3}$",
      "example": "1037"
    }
  },
  "ID": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^[1-9]\\d{4}$",
      "example": "40115"
    }
  },
  "IE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(D6W|[AC-FHKNPRT-Z]\\d{2}) ?[0-9AC-FHKNPRT-Z]{4}$",
      "example": "D02 AF30"
    }
  },
  "IL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{7}$",
      "example": "9614303"
    }
  },
  "IM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^IM[1-9]\\d? ?\\d[A-Z]{2}$",
      "example": "IM2 1AA"
    }
  },
  "IN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{6}$",
      "example": "110034"
    }
  },
  "IO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "BBND 1ZZ"
    }
  },
  "IQ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(10|3[1246]|4[1246]|5[12468]|6[1246])\\d{3}$",
      "example": "31001"
    }
  },
  "IR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "IS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(IS-?)?[1-9]\\d{2}$",
      "example": "320"
    }
  },
  "IT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(IT?-?)?\\d{5}$",
      "example": "00144"
    }
  },
  "JE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^JE\\d{1,2} {0,2}\\d[A-Z]{2}$",
      "example": "JE1 1AA"
    }
  },
  "JM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "JO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "11937"
    }
  },
  "JP": {
    "layout": [
      [
        "country"
      ],
      [
        "lastName",
        "firstName"
      ],
      [
        "company"
      ],
      [
        "zip",
        "province"
      ],
      [
        "city"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^〒?(\\d{7}|[0-9|０-９]{3}(-|ー)[0-9|０-９]{4})$",
      "example": "154-0023"
    }
  },
  "KE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{5}$",
      "example": "20100"
    }
  },
  "KG": {
    "layout": [
      [
        "country"
      ],
      [
        "zip",
        "city"
      ],
      [
        "address2"
      ],
      [
        "address1"
      ],
      [
        "company"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "720001"
    }
  },
  "KH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "120203"
    }
  },
  "KI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "KM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "KN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(KN)?(01(0[1-9]|1[01])|0[23689]0[123]|040[123]|0501|0700|1[012]0[12])$",
      "example": "KN0101"
    }
  },
  "KP": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "KR": {
    "layout": [
      [
        "country"
      ],
      [
        "company"
      ],
      [
        "lastName",
        "firstName"
      ],
      [
        "zip"
      ],
      [
        "province",
        "city"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(\\d{5}|\\d{3}-\\d{3})$",
      "example": "01600"
    }
  },
  "KW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "54541"
    }
  },
  "KY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "KY1-1100"
    }
  },
  "KZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^([A-Z]\\d{2}[A-Z]\\d[A-Z]\\d|\\d{6})$",
      "example": "040900"
    }
  },
  "LA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(0[1-9]|1[0-8])\\d{3}$",
      "example": "01160"
    }
  },
  "LB": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "2038 3054"
    }
  },
  "LC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^LC\\d{2}  \\d{3}$",
      "example": "LC05  201"
    }
  },
  "LI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((LI|FL)( |-)?)?94[89]\\d$",
      "example": "9496"
    }
  },
  "LK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{5}$",
      "example": "20000"
    }
  },
  "LR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{4}$",
      "example": "1000"
    }
  },
  "LS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "100"
    }
  },
  "LT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(LT-?)?\\d{5}$",
      "example": "04340"
    }
  },
  "LU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(LU?-?)?\\d{4}$",
      "example": "4750"
    }
  },
  "LV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(LV-?)?\\d{4}$",
      "example": "LV-1073"
    }
  },
  "LY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "MA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-9]\\d{4}$",
      "example": "53000"
    }
  },
  "MC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MC-?)?980\\d{2}$",
      "example": "98000"
    }
  },
  "MD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MD-?)?([2-6]\\d|7[0-7])\\d{2}$",
      "example": "2012"
    }
  },
  "ME": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MN?E-?)?8[145]\\d{3}$",
      "example": "81257"
    }
  },
  "MF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MF-?)?97150$",
      "example": "97150"
    }
  },
  "MG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(((1)[0-1]|(20)|(23)|(3)[0-2]|(4)[0-2]|(5)[0-1]|(6)[0-2])[0-9])$",
      "example": "501"
    }
  },
  "MK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(N?MK-?)?[1267]\\d{3}$",
      "example": "1314"
    }
  },
  "ML": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "MM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "1508203"
    }
  },
  "MN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "65030"
    }
  },
  "MO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "MQ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MQ-?)?((972)\\d{2,2})$",
      "example": "97220"
    }
  },
  "MR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "MS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^MSR ?1[1-3][1235]0$",
      "example": "MSR1210"
    }
  },
  "MT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(MT-?)?([Tt][Pp]|[A-Za-z]{3}) ?[0-9]{4}$",
      "example": "VLT 1933"
    }
  },
  "MU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-9AR]\\d{4}$",
      "example": "11106"
    }
  },
  "MV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^([0-1]\\d{4}|2[0-3]\\d{3})$",
      "example": "20026"
    }
  },
  "MW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-3]\\d{5}$",
      "example": "207201"
    }
  },
  "MX": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{5}$",
      "example": "02860"
    }
  },
  "MY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{5}$",
      "example": "43000"
    }
  },
  "MZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "1102"
    }
  },
  "NA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(1[0-9]|2[0-3])0\\d{2}$",
      "example": "10005"
    }
  },
  "NC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(NC-?)?988\\d{2}$",
      "example": "98814"
    }
  },
  "NE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-8]0[01][0-9]$",
      "example": "8001"
    }
  },
  "NF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "NG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^[1-9]\\d{5}$",
      "example": "930283"
    }
  },
  "NI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "52000"
    }
  },
  "NL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-9][0-9]{3} ?[A-Z]{2}$",
      "example": "1065 AM"
    }
  },
  "NO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(NO?( |-)?)?(?!8099|917\\d)(\\d{4})$",
      "example": "0025"
    }
  },
  "NP": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "44601"
    }
  },
  "NR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "NU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "NZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{4}$",
      "example": "6001"
    },
    "provinceOptional": true
  },
  "OM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "133"
    }
  },
  "PA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{4}$",
      "example": "0801"
    }
  },
  "PE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "LIMA 23"
    }
  },
  "PF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(PF-?)?987\\d{2}$",
      "example": "98709"
    }
  },
  "PG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "111"
    }
  },
  "PH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{4}$",
      "example": "1008"
    }
  },
  "PK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "44000"
    }
  },
  "PL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(PL-?)?\\d{2}( |-)?\\d{3}$",
      "example": "00-950"
    }
  },
  "PM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(PM-?)?((975)\\d{2,2})$",
      "example": "97500"
    }
  },
  "PN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country"
    ],
    "hasZones": false
  },
  "PS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "PT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(PT?-?)?\\d{4}-?\\d{3}$",
      "example": "2725-079"
    }
  },
  "PY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "001015"
    }
  },
  "QA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "RE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(RE-?)?97[478]\\d{2}$",
      "example": "97400"
    }
  },
  "RO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(RO-?)?\\d{6}$",
      "example": "060274"
    }
  },
  "RS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((RS|SRB)-?)?([123]\\d{4}|\\d{6})$",
      "example": "106314"
    }
  },
  "RU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "[12346]\\d{5}",
      "example": "125076"
    }
  },
  "RW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{5}(-\\d{4})?$",
      "example": "11564"
    }
  },
  "SB": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^[1-6١-٦۱-۶][0-9٠-٩۰-۹]{4}$",
      "example": "13311"
    }
  },
  "SE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "\\d{3} ?\\d{2}",
      "example": "11455"
    }
  },
  "SG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{6}$",
      "example": "546080"
    }
  },
  "SH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SI": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((SI|SLO)-?)?[12345689]\\d{3}$",
      "example": "4000"
    }
  },
  "SJ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((SJ( |-)?)?((8099)|(917\\d)))$",
      "example": "9170"
    }
  },
  "SK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((SK( |-)?)?[089]\\d{2} ?\\d{2})$",
      "example": "010 01"
    }
  },
  "SL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(R?SM( |-)?)?4789\\d$",
      "example": "47890"
    }
  },
  "SN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "12500"
    }
  },
  "SO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "JH  09010"
    }
  },
  "SR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "ST": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "CP 1101"
    }
  },
  "SX": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "SY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {}
  },
  "SZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "H100"
    }
  },
  "TA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country"
    ],
    "hasZones": false
  },
  "TC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TD": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^984\\d{2}$"
    }
  },
  "TG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TH": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^[1-9]\\d{4}(-?\\d{4})?$",
      "example": "10150"
    }
  },
  "TJ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "735450"
    }
  },
  "TK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TL": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TM": {
    "layout": [
      [
        "country"
      ],
      [
        "zip",
        "city"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((7)\\d{5,5})$",
      "example": "744000"
    }
  },
  "TN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(1[012]|2[012]|3[012]|4[012]|5[01]|6[01]|7[01]|8[01]|9[01])\\d{2}$",
      "example": "1002"
    }
  },
  "TO": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TR": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "01960"
    }
  },
  "TT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{6}$",
      "example": "120110"
    }
  },
  "TV": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "TW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "104"
    }
  },
  "TZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "6090"
    }
  },
  "UA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^\\d{5}$",
      "example": "15432"
    }
  },
  "UG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "UM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^96898(-?\\d{4})?$",
      "example": "96898"
    }
  },
  "US": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^\\d{5}(-\\d{4})?$",
      "example": "90210"
    }
  },
  "UY": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "11600"
    }
  },
  "UZ": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(100|11[0-2]|12[01]|13[01]|14[01]|15[01]|16[01]|17[01]|18[01]|19[01]|20[01]|21[01]|22[01]|23[01])\\d{3}$",
      "example": "140100"
    }
  },
  "VA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country"
    ],
    "hasZones": false
  },
  "VC": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^VC0[1234]\\d{2}$",
      "example": "VC0100"
    }
  },
  "VE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip",
        "province"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "example": "1010"
    }
  },
  "VG": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^VG11[1-6]0$",
      "example": "VG1110"
    }
  },
  "VN": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "119415"
    }
  },
  "VU": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "WF": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^986\\d{2}$",
      "example": "98600"
    }
  },
  "WS": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^WS(1[1-4]\\d{2}|2[1-6]\\d{2})$",
      "example": "WS1434"
    }
  },
  "XK": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^((RKS|XK)-?)?[1-7]\\d{4}$",
      "example": "10000"
    }
  },
  "YE": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  },
  "YT": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip"
    ],
    "hasZones": false,
    "zip": {
      "regex": "^(YT-?)?(((976)|(985))\\d{2,2})$",
      "example": "97600"
    }
  },
  "ZA": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city",
        "province",
        "zip"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city",
      "zip",
      "province"
    ],
    "hasZones": true,
    "zip": {
      "regex": "^(?!9[012]\\d{2})(\\d{4})$",
      "example": "0083"
    }
  },
  "ZM": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "zip",
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false,
    "zip": {
      "example": "50100"
    }
  },
  "ZW": {
    "layout": [
      [
        "country"
      ],
      [
        "firstName",
        "lastName"
      ],
      [
        "company"
      ],
      [
        "address1"
      ],
      [
        "address2"
      ],
      [
        "city"
      ],
      [
        "phone"
      ]
    ],
    "required": [
      "country",
      "city"
    ],
    "hasZones": false
  }
};
