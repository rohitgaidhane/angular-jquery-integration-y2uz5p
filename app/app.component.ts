import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  scaleValue = '';
  unitValue = '';
  quantityValue = '';
  ScaleFactor = [];
  units = [];
  QuantityType = [];
  ScaleFactor_copy = [
    {
      ScaleFactor: '0.0000001',
      ScaleFactorText: '0.0000001',
      SLOTList: '7,142',
    },
    {
      ScaleFactor: '0.0000305',
      ScaleFactorText: '0.0000305',
      SLOTList: '502',
    },
    {
      ScaleFactor: '0.000030517578125',
      ScaleFactorText: '0.000030517578125',
      SLOTList: '294',
    },
    {
      ScaleFactor: '0.00003052',
      ScaleFactorText: '0.00003052',
      SLOTList: '302',
    },
    {
      ScaleFactor: '0.0000512',
      ScaleFactorText: '0.0000512',
      SLOTList: '206',
    },
    {
      ScaleFactor: '0.00006103515625',
      ScaleFactorText: '0.00006103515625',
      SLOTList: '151,369',
    },
    {
      ScaleFactor: '0.0001',
      ScaleFactorText: '0.0001',
      SLOTList: '82,479',
    },
    {
      ScaleFactor: '0.0001220703125',
      ScaleFactorText: '0.0001220703125',
      SLOTList: '114,366,364,307,318',
    },
    {
      ScaleFactor: '0.0002',
      ScaleFactorText: '0.0002',
      SLOTList: '471',
    },
    {
      ScaleFactor: '0.00048828125',
      ScaleFactorText: '0.00048828125',
      SLOTList: '501,115',
    },
    {
      ScaleFactor: '0.0005',
      ScaleFactorText: '0.0005',
      SLOTList: '472',
    },
    {
      ScaleFactor: '0.000514',
      ScaleFactorText: '0.000514',
      SLOTList: '237',
    },
    {
      ScaleFactor: '0.00078125',
      ScaleFactorText: '0.00078125',
      SLOTList: '22',
    },
    {
      ScaleFactor: '0.0009765625',
      ScaleFactorText: '0.0009765625',
      SLOTList: '113,367,372,486',
    },
    {
      ScaleFactor: '0.001',
      ScaleFactorText: '0.001',
      SLOTList: '495,415,418,419,438,321,300,334,347,143,125,126,32',
    },
    {
      ScaleFactor: '0.0015625',
      ScaleFactorText: '0.0015625',
      SLOTList: '345',
    },
    {
      ScaleFactor: '0.001953125',
      ScaleFactorText: '0.001953125',
      SLOTList: '16,17,483',
    },
    {
      ScaleFactor: '0.002',
      ScaleFactorText: '0.002',
      SLOTList: '242,243',
    },
    {
      ScaleFactor: '0.0025',
      ScaleFactorText: '0.0025',
      SLOTList: '30',
    },
    {
      ScaleFactor: '0.0035176',
      ScaleFactorText: '0.0035176',
      SLOTList: '393',
    },
    {
      ScaleFactor: '0.00390625',
      ScaleFactorText: '0.00390625',
      SLOTList: '403,389,323,51,71,136,450,399',
    },
    {
      ScaleFactor: '0.004',
      ScaleFactorText: '0.004',
      SLOTList: '447,497,112,264',
    },
    {
      ScaleFactor: '0.005',
      ScaleFactorText: '0.005',
      SLOTList: '336,352,430',
    },
    {
      ScaleFactor: '0.0078125',
      ScaleFactorText: '0.0078125',
      SLOTList: '431,357,358,379,365,261,288,252,256,96,144,72,52,8,9',
    },
    {
      ScaleFactor: '0.01',
      ScaleFactorText: '0.01',
      SLOTList: '23,57,221,285,303,362,387,394,342,333,509,510,514,496,503,491',
    },
    {
      ScaleFactor: '0.0125',
      ScaleFactorText: '0.0125',
      SLOTList: '446,337',
    },
    {
      ScaleFactor: '0.015625',
      ScaleFactorText: '0.015625',
      SLOTList: '301,363,459,416',
    },
    {
      ScaleFactor: '0.02',
      ScaleFactorText: '0.02',
      SLOTList: '407,396',
    },
    {
      ScaleFactor: '0.02044',
      ScaleFactorText: '0.02044',
      SLOTList: '423',
    },
    {
      ScaleFactor: '0.025',
      ScaleFactorText: '0.025',
      SLOTList: '465,359',
    },
    {
      ScaleFactor: '0.03125',
      ScaleFactorText: '0.03125',
      SLOTList: '375,68,442,445,440,400,458',
    },
    {
      ScaleFactor: '0.04',
      ScaleFactorText: '0.04',
      SLOTList: '308',
    },
    {
      ScaleFactor: '0.05',
      ScaleFactorText: '0.05',
      SLOTList:
        '317,322,346,349,350,376,236,249,250,80,58,42,48,18,104,508,437,444',
    },
    {
      ScaleFactor: '0.0625',
      ScaleFactorText: '0.0625',
      SLOTList: '449,457,441,485,74,370',
    },
    {
      ScaleFactor: '0.08',
      ScaleFactorText: '0.08',
      SLOTList: '287,460',
    },
    {
      ScaleFactor: '0.1',
      ScaleFactorText: '0.1',
      SLOTList:
        '476,484,436,428,429,401,487,504,290,295,251,244,205,224,226,227,388,390,348,360,353,355,319,320,59,19,13,14,10,31,83,85,139,140,162',
    },
    {
      ScaleFactor: '0.125',
      ScaleFactorText: '0.125',
      SLOTList: '36,39,76,404,405,406,138,268,494,506,507,453,451,443',
    },
    {
      ScaleFactor: '0.2',
      ScaleFactorText: '0.2',
      SLOTList: '409,10000,262,397',
    },
    {
      ScaleFactor: '0.25',
      ScaleFactorText: '0.25',
      SLOTList: '398,254,63,60,10001,500,505,410,454,463',
    },
    {
      ScaleFactor: '0.3',
      ScaleFactorText: '0.3',
      SLOTList: '272',
    },
    {
      ScaleFactor: '0.4',
      ScaleFactorText: '0.4',
      SLOTList: '44,204',
    },
    {
      ScaleFactor: '0.5',
      ScaleFactorText: '0.5',
      SLOTList:
        '50,54,55,75,78,27,20,21,297,298,299,305,248,241,222,225,326,452,413,434',
    },
    {
      ScaleFactor: '0.8',
      ScaleFactorText: '0.8',
      SLOTList: '128',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: '1',
      SLOTList:
        '129,116,120,121,95,84,99,101,86,87,88,89,90,91,92,93,159,207,208,209,211,214,215,216,217,218,141,135,132,133,145,146,147,148,149,150,15,11,12,3,4,5,6,24,25,26,40,41,33,35,81,64,65,66,67,69,70,73,56,61,62,45,46,324,325,361,351,395,383,340,377,378,373,223,235,220,230,231,232,233,247,238,239,245,257,259,260,284,292,306,296,270,263,274,275,276,278,281,422,425,414,420,461,462,473,474,477,469,493,488,511,10002',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'ASCII',
      SLOTList:
        '131,108,109,110,111,94,212,381,339,228,258,291,271,273,282,489,421',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'Data Specific',
      SLOTList: '456,490,283,280,277,154,155,158,134',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'per Data Value SPN definition',
      SLOTList: '10003',
    },
    {
      ScaleFactor: '1.64',
      ScaleFactorText: '1.64',
      SLOTList: '246',
    },
    {
      ScaleFactor: '2',
      ScaleFactorText: '2',
      SLOTList: '53,28,219,98,122,106,107,380,267,426,427,455',
    },
    {
      ScaleFactor: '4',
      ScaleFactorText: '4',
      SLOTList: '47,77,286,475',
    },
    {
      ScaleFactor: '5',
      ScaleFactorText: '5',
      SLOTList: '470,433,512,513,255,43,37,38,1,130',
    },
    {
      ScaleFactor: '6',
      ScaleFactorText: '6',
      SLOTList: '384',
    },
    {
      ScaleFactor: '8',
      ScaleFactorText: '8',
      SLOTList: '2',
    },
    {
      ScaleFactor: '10',
      ScaleFactorText: '10',
      SLOTList: '234,356,354,79,29,127,464,386',
    },
    {
      ScaleFactor: '16',
      ScaleFactorText: '16',
      SLOTList: '411,49',
    },
    {
      ScaleFactor: '25',
      ScaleFactorText: '25',
      SLOTList: '439',
    },
    {
      ScaleFactor: '30',
      ScaleFactorText: '30',
      SLOTList: '137',
    },
    {
      ScaleFactor: '32',
      ScaleFactorText: '32',
      SLOTList: '97',
    },
    {
      ScaleFactor: '50',
      ScaleFactorText: '50',
      SLOTList: '229',
    },
    {
      ScaleFactor: '100',
      ScaleFactorText: '100',
      SLOTList: '412,424,161,343',
    },
    {
      ScaleFactor: '250',
      ScaleFactorText: '250',
      SLOTList: '385',
    },
    {
      ScaleFactor: '500',
      ScaleFactorText: '500',
      SLOTList: '492',
    },
    {
      ScaleFactor: '1000',
      ScaleFactorText: '1000',
      SLOTList: '34,480',
    },
  ];
  units_copy = [
    {
      Units: '',
      SLOTList:
        '23,31,32,56,86,87,88,89,90,91,92,93,94,82,108,109,110,111,116,120,121,131,139,151,159,212,214,215,216,218,228,258,271,273,275,276,278,282,291,292,307,318,339,362,375,381,394,421,447,489,502',
    },
    {
      Units: '%',
      SLOTList:
        '496,497,465,449,450,430,387,404,334,345,308,295,299,264,268,256,251,254,237,205,128,44,45,46,30',
    },
    {
      Units: '%/%',
      SLOTList: '457',
    },
    {
      Units: '%/(%*s)',
      SLOTList: '459',
    },
    {
      Units: '%/(%/s)',
      SLOTList: '458',
    },
    {
      Units: '%/bar',
      SLOTList: '297,298',
    },
    {
      Units: '%/rpm',
      SLOTList: '22',
    },
    {
      Units: '%/s',
      SLOTList: '491,454,455',
    },
    {
      Units: '(kPa•s)/m³',
      SLOTList: '359',
    },
    {
      Units: '°C',
      SLOTList: '358,67,68',
    },
    {
      Units: '°C/kg/s',
      SLOTList: '416',
    },
    {
      Units: 'µA',
      SLOTList: '403',
    },
    {
      Units: 'µs',
      SLOTList: '380,353,319',
    },
    {
      Units: 'µSiemens/mm',
      SLOTList: '255',
    },
    {
      Units: 'A',
      SLOTList: '250,352,40,41,143,146,104,410,444,451,440,441,436,507',
    },
    {
      Units: 'Ah',
      SLOTList: '351,342,343',
    },
    {
      Units: 'brakeappl',
      SLOTList: '81',
    },
    {
      Units: 'byte',
      SLOTList: '281,239',
    },
    {
      Units: 'cm',
      SLOTList: '420',
    },
    {
      Units: 'count',
      SLOTList:
        '422,395,493,232,233,230,220,207,208,209,260,306,340,129,133,12',
    },
    {
      Units: 'cP',
      SLOTList: '301',
    },
    {
      Units: 'DataSpecific',
      SLOTList: '283,280,277,134,154,155,158,490,456',
    },
    {
      Units: 'days',
      SLOTList: '60',
    },
    {
      Units: 'dBm',
      SLOTList: '326',
    },
    {
      Units: 'deg',
      SLOTList: '294,365,261,244,242,248,11,7,8,9,136,379,485,446',
    },
    {
      Units: 'deg/s',
      SLOTList: '243,288',
    },
    {
      Units: 'g',
      SLOTList: '286,363,227,471,472,473,513,415',
    },
    {
      Units: 'g/cc',
      SLOTList: '302',
    },
    {
      Units: 'g/h',
      SLOTList: '272',
    },
    {
      Units: 'g/kg',
      SLOTList: '285',
    },
    {
      Units: 'g/L',
      SLOTList: '287,460',
    },
    {
      Units: 'g/min',
      SLOTList: '317',
    },
    {
      Units: 'g/s',
      SLOTList: '336,396,479',
    },
    {
      Units: 'gearvalue',
      SLOTList: '101,24',
    },
    {
      Units: 'h',
      SLOTList: '3,4,5,58,324,224,10000,10001',
    },
    {
      Units: 'Hz',
      SLOTList: '514,461,425,144',
    },
    {
      Units: 'Hz/s',
      SLOTList: '426',
    },
    {
      Units: 'ID',
      SLOTList: '25,217,245,325,373',
    },
    {
      Units: 'kg',
      SLOTList: '267,226,21,27,28,29,122,412',
    },
    {
      Units: 'kg/h',
      SLOTList: '397,419,18,262,360,361',
    },
    {
      Units: 'kg/min',
      SLOTList: '388',
    },
    {
      Units: 'kg/s',
      SLOTList: '372,369',
    },
    {
      Units: 'kg•m²',
      SLOTList: '112',
    },
    {
      Units: 'kJ',
      SLOTList: '354,511,512',
    },
    {
      Units: 'kJ/l',
      SLOTList: '366',
    },
    {
      Units: 'km',
      SLOTList: '270,36,37,463,445',
    },
    {
      Units: 'km/h',
      SLOTList: '405,406,399,71,72,73,74',
    },
    {
      Units: 'km/kg',
      SLOTList: '17',
    },
    {
      Units: 'km/L',
      SLOTList: '16',
    },
    {
      Units: 'km?¹',
      SLOTList: '96,500',
    },
    {
      Units: 'km²/h²',
      SLOTList: '469,470',
    },
    {
      Units: 'kN',
      SLOTList: '433,135',
    },
    {
      Units: 'kohm',
      SLOTList: '383,385',
    },
    {
      Units: 'kPa',
      SLOTList:
        '386,377,431,487,510,130,138,161,85,106,1,2,47,48,49,50,52,53,54,246,229,357,355',
    },
    {
      Units: 'kPa/degcrankangle',
      SLOTList: '411',
    },
    {
      Units: 'kVArh',
      SLOTList: '257',
    },
    {
      Units: 'kW',
      SLOTList: '346,370,55,428,437,505',
    },
    {
      Units: 'kW/s',
      SLOTList: '443',
    },
    {
      Units: 'kWh',
      SLOTList: '462,418,484,150',
    },
    {
      Units: 'kWh/km',
      SLOTList: '483',
    },
    {
      Units: 'l',
      SLOTList: '476,75,20,376,300,225,222',
    },
    {
      Units: 'l/h',
      SLOTList: '321,350,42',
    },
    {
      Units: 'l/min',
      SLOTList: '434',
    },
    {
      Units: 'm',
      SLOTList: '439,407,38,39,15,95,142,126',
    },
    {
      Units: 'm/h',
      SLOTList: '219',
    },
    {
      Units: 'm/s',
      SLOTList: '125,401,495',
    },
    {
      Units: 'm/s²',
      SLOTList: '501,140,115,303',
    },
    {
      Units: 'm³',
      SLOTList: '413',
    },
    {
      Units: 'm³/h',
      SLOTList: '19',
    },
    {
      Units: 'mA',
      SLOTList: '438',
    },
    {
      Units: 'mAh',
      SLOTList: '211',
    },
    {
      Units: 'mg',
      SLOTList: '356',
    },
    {
      Units: 'mg/l',
      SLOTList: '474',
    },
    {
      Units: 'mg/m³',
      SLOTList: '337',
    },
    {
      Units: 'mg/stroke',
      SLOTList: '400,389',
    },
    {
      Units: 'MHz',
      SLOTList: '320',
    },
    {
      Units: 'min',
      SLOTList: '238,61,99,504,10002',
    },
    {
      Units: 'MJ/Nm³',
      SLOTList: '323',
    },
    {
      Units: 'mm',
      SLOTList: '234,235,231,13,14',
    },
    {
      Units: 'mm²/s',
      SLOTList: '26',
    },
    {
      Units: 'Mohm*m',
      SLOTList: '83',
    },
    {
      Units: 'month',
      SLOTList: '62',
    },
    {
      Units: 'MPa',
      SLOTList: '51,367,364,393',
    },
    {
      Units: 'ms',
      SLOTList: '241,247,57,132',
    },
    {
      Units: 'mV',
      SLOTList: '390',
    },
    {
      Units: 'mW/cm²',
      SLOTList: '204',
    },
    {
      Units: 'N',
      SLOTList: '127,43',
    },
    {
      Units: 'Nm',
      SLOTList: '69,70,137,98,452,486',
    },
    {
      Units: 'ohm',
      SLOTList: '480,290',
    },
    {
      Units: 'ohmperV',
      SLOTList: '429',
    },
    {
      Units: 'Pa',
      SLOTList: '475',
    },
    {
      Units: 'Pa/s',
      SLOTList: '162',
    },
    {
      Units: 'perDataValueSPNdefinition',
      SLOTList: '10003',
    },
    {
      Units: 'ppm',
      SLOTList: '492,296,348,349,236',
    },
    {
      Units: 'r',
      SLOTList: '34',
    },
    {
      Units: 'rad',
      SLOTList: '113',
    },
    {
      Units: 'rad/s',
      SLOTList: '114',
    },
    {
      Units: 'range',
      SLOTList: '263',
    },
    {
      Units: 'record',
      SLOTList: '33',
    },
    {
      Units: 'rpm',
      SLOTList: '97,76,77,78,79,223,494,398,378',
    },
    {
      Units: 'rpm/s',
      SLOTList: '414',
    },
    {
      Units: 's',
      SLOTList: '384,488,464,477,206,322,333,6,10,63,64,59',
    },
    {
      Units: 'selection',
      SLOTList: '259',
    },
    {
      Units: 'sourceaddress',
      SLOTList: '35',
    },
    {
      Units: 'step',
      SLOTList: '84',
    },
    {
      Units: 'troublecode',
      SLOTList: '274',
    },
    {
      Units: 'turn',
      SLOTList: '141',
    },
    {
      Units: 'V',
      SLOTList: '145,80,252,249,221,347,508,509,506,503,409,427,423,453,442',
    },
    {
      Units: 'VA',
      SLOTList: '148',
    },
    {
      Units: 'VAr',
      SLOTList: '149',
    },
    {
      Units: 'W',
      SLOTList: '147,107,305',
    },
    {
      Units: 'Watt-hour',
      SLOTList: '424',
    },
    {
      Units: 'week',
      SLOTList: '65',
    },
    {
      Units: 'year',
      SLOTList: '66,284',
    },
  ];
  QuantityType_copy = [
    {
      QuantityType: 'Acceleration',
      SLOTList: '115,140,303,501',
    },
    {
      QuantityType: 'Angle/Direction',
      SLOTList: '485,7,8,9,10,11,446,294,365,379,136,113,244,242,248',
    },
    {
      QuantityType: 'Angular Acceleration',
      SLOTList: '414',
    },
    {
      QuantityType: 'ASCII, text (fixed length)',
      SLOTList: '421,273,282,339,212,110,131,94',
    },
    {
      QuantityType: 'ASCII, text (variable, "*" delimited)',
      SLOTList: '111,108,109,271,291,381',
    },
    {
      QuantityType: 'ASCII, text (variable, non-delimited)',
      SLOTList: '228,489',
    },
    {
      QuantityType: 'ASCII, text (variable, NULL delimited)',
      SLOTList: '258',
    },
    {
      QuantityType: 'Bit Field',
      SLOTList: '86,87,88,89,90,91,92,93',
    },
    {
      QuantityType: 'Bit mapped',
      SLOTList: '292,275,276,278',
    },
    {
      QuantityType: 'Brake Applications',
      SLOTList: '81',
    },
    {
      QuantityType: 'Calendar, days',
      SLOTList: '60',
    },
    {
      QuantityType: 'Calendar, months',
      SLOTList: '62',
    },
    {
      QuantityType: 'Calendar, weeks',
      SLOTList: '65',
    },
    {
      QuantityType: 'Calendar, years',
      SLOTList: '66,284',
    },
    {
      QuantityType: 'Capacity, Battery',
      SLOTList: '351,342,343,211',
    },
    {
      QuantityType: 'Conductivity',
      SLOTList: '255',
    },
    {
      QuantityType: 'Control byte',
      SLOTList: '120',
    },
    {
      QuantityType: 'Count',
      SLOTList: '129,141,230,340,306,395,422,12',
    },
    {
      QuantityType: 'Count (no error, N/A)',
      SLOTList: '493,232,233,260,220,207,208,209,133',
    },
    {
      QuantityType: 'Curvature',
      SLOTList: '500',
    },
    {
      QuantityType: 'Density',
      SLOTList: '460,287,302',
    },
    {
      QuantityType: 'Dielectricity',
      SLOTList: '307,139',
    },
    {
      QuantityType: 'Differential Gain',
      SLOTList: '458',
    },
    {
      QuantityType: 'Differential Pressure, Compensated',
      SLOTList: '359',
    },
    {
      QuantityType: 'Distance',
      SLOTList:
        '270,407,420,439,445,234,235,231,126,142,95,463,13,14,15,36,37,38,39',
    },
    {
      QuantityType: 'Dynamic viscosity',
      SLOTList: '301',
    },
    {
      QuantityType: 'Economy, gaseous',
      SLOTList: '17',
    },
    {
      QuantityType: 'Economy, liquid',
      SLOTList: '16',
    },
    {
      QuantityType: 'Electrical Current',
      SLOTList: '507,451,40,41,352,444,438,440,441,436,410,403,143,104,250,146',
    },
    {
      QuantityType: 'Electrical Voltage',
      SLOTList:
        '145,221,252,249,80,390,409,423,427,442,347,506,453,508,509,503',
    },
    {
      QuantityType: 'Energy',
      SLOTList: '462,484,354,424,418,366,150',
    },
    {
      QuantityType: 'Energy [PKE Numerator]',
      SLOTList: '469,470',
    },
    {
      QuantityType: 'Energy Economy',
      SLOTList: '483',
    },
    {
      QuantityType: 'Energy, Fuel',
      SLOTList: '323',
    },
    {
      QuantityType: 'Energy, reactive',
      SLOTList: '257',
    },
    {
      QuantityType: 'Flow rate, gaseous',
      SLOTList: '262,372,369,419,18',
    },
    {
      QuantityType: 'Flow rate, liquid',
      SLOTList: '42,434,321,350',
    },
    {
      QuantityType: 'Flow rate, mass',
      SLOTList: '360,361,317,336,272,396,397,388,479',
    },
    {
      QuantityType: 'Flow rate, volumetric',
      SLOTList: '19',
    },
    {
      QuantityType: 'FMI',
      SLOTList: '215',
    },
    {
      QuantityType: 'Force',
      SLOTList: '135,127,433,43',
    },
    {
      QuantityType: 'Frequency',
      SLOTList: '461,425,320,144',
    },
    {
      QuantityType: 'Frequency Rate',
      SLOTList: '426',
    },
    {
      QuantityType: 'Fuel Injection Quantity',
      SLOTList: '400,389',
    },
    {
      QuantityType: 'Fuel Used, gaseous',
      SLOTList: '21',
    },
    {
      QuantityType: 'Fuel Used, liquid',
      SLOTList: '20,300',
    },
    {
      QuantityType: 'Gear Ratio',
      SLOTList: '23',
    },
    {
      QuantityType: 'Gear Value',
      SLOTList: '24,101',
    },
    {
      QuantityType: 'Governor gain',
      SLOTList: '22',
    },
    {
      QuantityType: 'Group Function',
      SLOTList: '121',
    },
    {
      QuantityType: 'Identifier,component/software',
      SLOTList: '217,245,325,373,25',
    },
    {
      QuantityType: 'Inertia',
      SLOTList: '112',
    },
    {
      QuantityType: 'Integral Gain',
      SLOTList: '459',
    },
    {
      QuantityType: 'Intensity, optical',
      SLOTList: '204',
    },
    {
      QuantityType: 'Isolation Resistance',
      SLOTList: '429',
    },
    {
      QuantityType: 'Kinematic viscosity',
      SLOTList: '26',
    },
    {
      QuantityType: 'Lambda signal gain',
      SLOTList: '297',
    },
    {
      QuantityType: 'Manufacturer defined',
      SLOTList: '283,490',
    },
    {
      QuantityType: 'Manufacturer ID',
      SLOTList: '218',
    },
    {
      QuantityType: 'Mass',
      SLOTList: '226,227,267,122,286,356,412,415,363,471,472,473,27,28,29',
    },
    {
      QuantityType: 'Mass Concentration',
      SLOTList: '474,337',
    },
    {
      QuantityType: 'Name (long)',
      SLOTList: '159',
    },
    {
      QuantityType: 'Number of bytes',
      SLOTList: '239,281',
    },
    {
      QuantityType: 'OC',
      SLOTList: '216',
    },
    {
      QuantityType: 'Parts Per Million',
      SLOTList: '236,296,348,349,492',
    },
    {
      QuantityType: 'Per SPN Definition',
      SLOTList: '10003',
    },
    {
      QuantityType: 'Percent',
      SLOTList: '465,449,450,334,345,299,387,404,237',
    },
    {
      QuantityType: 'Percent, concentration',
      SLOTList: '254',
    },
    {
      QuantityType: 'Percent, droop',
      SLOTList: '308',
    },
    {
      QuantityType: 'Percent, flow',
      SLOTList: '497',
    },
    {
      QuantityType: 'Percent, gain',
      SLOTList: '295',
    },
    {
      QuantityType: 'Percent, position/level',
      SLOTList: '430,251,256,268,264,205,128,496,30,44,45,46',
    },
    {
      QuantityType: 'PGN',
      SLOTList: '116',
    },
    {
      QuantityType: 'Power Factor',
      SLOTList: '151',
    },
    {
      QuantityType: 'Power Rate',
      SLOTList: '443',
    },
    {
      QuantityType: 'Power, Apparent',
      SLOTList: '148',
    },
    {
      QuantityType: 'Power, Reactive',
      SLOTList: '149',
    },
    {
      QuantityType: 'Power, Real',
      SLOTList: '147,107,428,437,370,305,346,505,55',
    },
    {
      QuantityType: 'Pressure',
      SLOTList:
        '47,48,49,50,51,52,53,54,487,1,2,510,475,357,355,377,364,367,393,386,431,106,130,138,85,161,229,246',
    },
    {
      QuantityType: 'Pressure Rate Change',
      SLOTList: '162,411',
    },
    {
      QuantityType: 'Proportional Gain',
      SLOTList: '457',
    },
    {
      QuantityType: 'Proprietary Data',
      SLOTList: '154',
    },
    {
      QuantityType: 'Range',
      SLOTList: '263',
    },
    {
      QuantityType: 'Rate of change',
      SLOTList: '454,455,491',
    },
    {
      QuantityType: 'Ratio',
      SLOTList: '502,447,31,32,56,394,375,362,318',
    },
    {
      QuantityType: 'Record',
      SLOTList: '33',
    },
    {
      QuantityType: 'Resistance',
      SLOTList: '480,290,383,385',
    },
    {
      QuantityType: 'Revolutions',
      SLOTList: '34',
    },
    {
      QuantityType: 'Road Curvature',
      SLOTList: '261,96',
    },
    {
      QuantityType: 'Selection',
      SLOTList: '259',
    },
    {
      QuantityType: 'Signal gain',
      SLOTList: '298,326',
    },
    {
      QuantityType: 'Source Address',
      SLOTList: '35',
    },
    {
      QuantityType: 'Specific Gravity',
      SLOTList: '82',
    },
    {
      QuantityType: 'Specific Humidity',
      SLOTList: '285',
    },
    {
      QuantityType: 'Specific Resistance',
      SLOTList: '83',
    },
    {
      QuantityType: 'SPN',
      SLOTList: '214',
    },
    {
      QuantityType: 'Step',
      SLOTList: '84',
    },
    {
      QuantityType: 'Temperature',
      SLOTList: '67,68,358',
    },
    {
      QuantityType: 'Temperature per mass flow',
      SLOTList: '416',
    },
    {
      QuantityType: 'Test data',
      SLOTList: '277',
    },
    {
      QuantityType: 'Time',
      SLOTList:
        '353,333,319,322,324,384,380,99,132,224,206,247,238,241,57,58,59,63,64,61,477,464,504,488,10000,10001,10002,3,4,5,6',
    },
    {
      QuantityType: 'Torque',
      SLOTList: '486,452,137,98,69,70',
    },
    {
      QuantityType: 'Transfer Data',
      SLOTList: '155',
    },
    {
      QuantityType: 'Transport Data',
      SLOTList: '158',
    },
    {
      QuantityType: 'Trouble code',
      SLOTList: '274',
    },
    {
      QuantityType: 'VariantData',
      SLOTList: '280,134,456',
    },
    {
      QuantityType: 'Velocity, angular',
      SLOTList: '114,243,288',
    },

    {
      ScaleFactor: '0.0000305',
      ScaleFactorText: '0.0000305',
      SLOTList: '502',
    },
    {
      ScaleFactor: '0.000030517578125',
      ScaleFactorText: '0.000030517578125',
      SLOTList: '294',
    },
    {
      ScaleFactor: '0.00003052',
      ScaleFactorText: '0.00003052',
      SLOTList: '302',
    },
    {
      ScaleFactor: '0.0000512',
      ScaleFactorText: '0.0000512',
      SLOTList: '206',
    },
    {
      ScaleFactor: '0.00006103515625',
      ScaleFactorText: '0.00006103515625',
      SLOTList: '151,369',
    },
    {
      ScaleFactor: '0.0001',
      ScaleFactorText: '0.0001',
      SLOTList: '82,479',
    },
    {
      ScaleFactor: '0.0001220703125',
      ScaleFactorText: '0.0001220703125',
      SLOTList: '114,364,366,307,318',
    },
    {
      ScaleFactor: '0.0002',
      ScaleFactorText: '0.0002',
      SLOTList: '471',
    },
    {
      ScaleFactor: '0.00048828125',
      ScaleFactorText: '0.00048828125',
      SLOTList: '501,115',
    },
    {
      ScaleFactor: '0.0005',
      ScaleFactorText: '0.0005',
      SLOTList: '472',
    },
    {
      ScaleFactor: '0.000514',
      ScaleFactorText: '0.000514',
      SLOTList: '237',
    },
    {
      ScaleFactor: '0.00078125',
      ScaleFactorText: '0.00078125',
      SLOTList: '22',
    },
    {
      ScaleFactor: '0.0009765625',
      ScaleFactorText: '0.0009765625',
      SLOTList: '486,113,367,372',
    },
    {
      ScaleFactor: '0.001',
      ScaleFactorText: '0.001',
      SLOTList: '347,321,334,300,415,418,419,438,125,126,143,495,32',
    },
    {
      ScaleFactor: '0.0015625',
      ScaleFactorText: '0.0015625',
      SLOTList: '345',
    },
    {
      ScaleFactor: '0.001953125',
      ScaleFactorText: '0.001953125',
      SLOTList: '483,16,17',
    },
    {
      ScaleFactor: '0.002',
      ScaleFactorText: '0.002',
      SLOTList: '242,243',
    },
    {
      ScaleFactor: '0.0025',
      ScaleFactorText: '0.0025',
      SLOTList: '30',
    },
    {
      ScaleFactor: '0.0035176',
      ScaleFactorText: '0.0035176',
      SLOTList: '393',
    },
    {
      ScaleFactor: '0.00390625',
      ScaleFactorText: '0.00390625',
      SLOTList: '389,399,403,450,323,136,71,51',
    },
    {
      ScaleFactor: '0.004',
      ScaleFactorText: '0.004',
      SLOTList: '497,112,264,447',
    },
    {
      ScaleFactor: '0.005',
      ScaleFactorText: '0.005',
      SLOTList: '430,336,352',
    },
    {
      ScaleFactor: '0.0078125',
      ScaleFactorText: '0.0078125',
      SLOTList: '357,358,365,379,288,431,252,256,261,144,72,96,8,9,52',
    },
    {
      ScaleFactor: '0.01',
      ScaleFactorText: '0.01',
      SLOTList: '57,509,510,23,503,491,496,285,221,394,387,303,333,342,362',
    },
    {
      ScaleFactor: '0.0125',
      ScaleFactorText: '0.0125',
      SLOTList: '337,446',
    },
    {
      ScaleFactor: '0.015625',
      ScaleFactorText: '0.015625',
      SLOTList: '459,416,301,363',
    },
    {
      ScaleFactor: '0.02',
      ScaleFactorText: '0.02',
      SLOTList: '407,396',
    },
    {
      ScaleFactor: '0.02044',
      ScaleFactorText: '0.02044',
      SLOTList: '423',
    },
    {
      ScaleFactor: '0.025',
      ScaleFactorText: '0.025',
      SLOTList: '359,465',
    },
    {
      ScaleFactor: '0.03125',
      ScaleFactorText: '0.03125',
      SLOTList: '375,400,458,445,440,442,68',
    },
    {
      ScaleFactor: '0.04',
      ScaleFactorText: '0.04',
      SLOTList: '308',
    },
    {
      ScaleFactor: '0.05',
      ScaleFactorText: '0.05',
      SLOTList:
        '317,322,376,349,350,346,437,444,80,104,236,249,250,18,508,58,42,48',
    },
    {
      ScaleFactor: '0.0625',
      ScaleFactorText: '0.0625',
      SLOTList: '485,74,441,449,457,370',
    },
    {
      ScaleFactor: '0.08',
      ScaleFactorText: '0.08',
      SLOTList: '287,460',
    },
    {
      ScaleFactor: '0.1',
      ScaleFactorText: '0.1',
      SLOTList:
        '436,428,429,401,388,390,290,295,319,320,348,353,360,355,83,85,251,244,226,227,224,139,140,162,205,484,504,487,476,31,13,14,19,10,59',
    },
    {
      ScaleFactor: '0.125',
      ScaleFactorText: '0.125',
      SLOTList: '39,36,506,507,494,268,76,138,404,405,406,443,451,453',
    },
    {
      ScaleFactor: '0.2',
      ScaleFactorText: '0.2',
      SLOTList: '397,409,262,10000',
    },
    {
      ScaleFactor: '0.25',
      ScaleFactorText: '0.25',
      SLOTList: '10001,500,505,463,60,63,254,410,398,454',
    },
    {
      ScaleFactor: '0.3',
      ScaleFactorText: '0.3',
      SLOTList: '272',
    },
    {
      ScaleFactor: '0.4',
      ScaleFactorText: '0.4',
      SLOTList: '204,44',
    },
    {
      ScaleFactor: '0.5',
      ScaleFactorText: '0.5',
      SLOTList:
        '50,54,55,20,21,27,225,222,241,248,78,75,452,434,413,326,297,298,299,305',
    },
    {
      ScaleFactor: '0.8',
      ScaleFactorText: '0.8',
      SLOTList: '128',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: '1',
      SLOTList:
        '129,132,133,99,101,116,120,121,135,145,146,147,148,149,150,73,69,70,66,67,84,81,86,87,88,89,90,91,92,93,95,247,245,257,263,259,260,278,281,270,274,275,276,238,239,235,223,230,231,232,233,220,214,215,216,217,218,141,159,207,208,209,211,306,296,284,292,324,325,340,361,351,373,377,378,383,414,422,420,395,425,461,462,15,24,25,26,10002,11,12,3,4,5,6,469,473,474,477,488,493,56,61,62,64,65,35,45,46,33,40,41',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'ASCII',
      SLOTList:
        '489,381,339,291,421,228,212,258,282,273,271,131,108,109,110,111,94',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'Data Specific',
      SLOTList: '134,154,155,158,277,280,283,456,490',
    },
    {
      ScaleFactor: '1',
      ScaleFactorText: 'per Data Value SPN definition',
      SLOTList: '10003',
    },
    {
      ScaleFactor: '1.64',
      ScaleFactorText: '1.64',
      SLOTList: '246',
    },
    {
      ScaleFactor: '2',
      ScaleFactorText: '2',
      SLOTList: '455,426,427,380,219,267,122,98,106,107,53,28',
    },
    {
      ScaleFactor: '4',
      ScaleFactorText: '4',
      SLOTList: '77,286,475,47',
    },
    {
      ScaleFactor: '5',
      ScaleFactorText: '5',
      SLOTList: '37,38,43,470,1,255,130,433',
    },
    {
      ScaleFactor: '6',
      ScaleFactorText: '6',
      SLOTList: '384',
    },
    {
      ScaleFactor: '8',
      ScaleFactorText: '8',
      SLOTList: '2',
    },
    {
      ScaleFactor: '10',
      ScaleFactorText: '10',
      SLOTList: '234,79,127,386,354,356,464,29',
    },
    {
      ScaleFactor: '16',
      ScaleFactorText: '16',
      SLOTList: '49,411',
    },
    {
      ScaleFactor: '25',
      ScaleFactorText: '25',
      SLOTList: '439',
    },
    {
      ScaleFactor: '30',
      ScaleFactorText: '30',
      SLOTList: '137',
    },
    {
      ScaleFactor: '32',
      ScaleFactorText: '32',
      SLOTList: '97',
    },
    {
      ScaleFactor: '50',
      ScaleFactorText: '50',
      SLOTList: '229',
    },
    {
      ScaleFactor: '100',
      ScaleFactorText: '100',
      SLOTList: '343,412,424,161',
    },
    {
      ScaleFactor: '250',
      ScaleFactorText: '250',
      SLOTList: '385',
    },
    {
      ScaleFactor: '500',
      ScaleFactorText: '500',
      SLOTList: '492',
    },
    {
      ScaleFactor: '1000',
      ScaleFactorText: '1000',
      SLOTList: '480,34',
    },
  ];
  optionsStoreScaling: {
    ScaleFactor: string;
    ScaleFactorText: string;
    SLOTList: string;
  }[];
  optionsStoreUnit: { Units: string; SLOTList: string }[];
  optionsStoreType: (
    | {
        QuantityType: string;
        SLOTList: string;
        ScaleFactor?: undefined;
        ScaleFactorText?: undefined;
      }
    | {
        ScaleFactor: string;
        ScaleFactorText: string;
        SLOTList: string;
        QuantityType?: undefined;
      }
  )[];

  constructor() {
    this.optionsStoreScaling = this.ScaleFactor_copy;
    this.optionsStoreUnit = this.units_copy;
    this.optionsStoreType = this.QuantityType_copy;
  }
  changeScale(key: any) {
    // Get the value (i.e. SLOT List) for each of the selection dropdowns
    var curSValue = this.scaleValue;
    var curTValue = this.quantityValue;
    var curUValue = this.unitValue;
    debugger;
    // Update the drop down options shown for each of the scaling dropdowns
    let scaleIndex = this.optionsStoreScaling.findIndex(
      (x) => x.SLOTList === this.scaleValue
    );
    let unitIndex = this.optionsStoreScaling.findIndex(
      (x) => x.SLOTList === this.unitValue
    );
    let qtyIndex = this.optionsStoreScaling.findIndex(
      (x) => x.SLOTList === this.quantityValue
    );
    this.LoadScalingOptions(
      scaleIndex != -1 ? scaleIndex : 0,
      curUValue,
      curTValue
    );
    this.LoadTypeOptions(qtyIndex != -1 ? qtyIndex : 0, curSValue, curUValue);
    this.LoadUnitOptions(unitIndex != -1 ? unitIndex : 0, curSValue, curTValue);
  }

  LoadScalingOptions(
    mySelectedIndex,
    unitsSelectionSLOTIDs,
    typesSelectionSLOTIDs
  ) {
    this.optionsStoreScaling = [];
    this.optionsStoreUnit = [];
    this.optionsStoreType = [];

    // get the array of common SLOT IDs between the provided lists
    var filteredSLOTs = this.combinePeerLists(
      unitsSelectionSLOTIDs,
      typesSelectionSLOTIDs
    );
    var allPeersAny =
      unitsSelectionSLOTIDs == '' && typesSelectionSLOTIDs == '';

    // Cycle through the list of Scaling options and add to drop down:
    //  IF the option SLOT list contains at least 1 of the SLOTs in filteredSLOTs
    //  OR both Peer Selections are 'Any'
    for (var i = 0; i < this.ScaleFactor_copy.length; i = i + 1) {
      // Determine the intersection of option SLOT list and filteredSLOTs
      let localScaleFactorSlot = this.ScaleFactor_copy[i]['SLOTList'].includes(
        ','
      )
        ? this.ScaleFactor_copy[i]['SLOTList'].split(',')
        : [this.ScaleFactor_copy[i]['SLOTList']];
      var commonSLOTS = this.listIntersect(filteredSLOTs, localScaleFactorSlot);

      if (commonSLOTS.length > 0 || allPeersAny) {
        this.optionsStoreScaling.push(this.ScaleFactor_copy[i]);
      }
    }

    // Select the specifed selected Scaling dropdown item if still in the list, otherwise top item selected
  }

  // Updates the Type drop down options based upon the Scaling and Unit selections
  //    mySelectedIndex:  ddindex integer value for Type dropdown selected item
  //    scalingSelectionSLOTIDs:  comma separated list of SLOT IDs, or 'Any' ('value' for Scaling dropdown selected item)
  //    unitsSelectionSLOTIDs:  comma separated list of SLOT IDs, or 'Any' ('value' for Unit dropdown selected item)
  LoadTypeOptions(
    mySelectedIndex,
    scalingSelectionSLOTIDs,
    unitsSelectionSLOTIDs
  ) {
    this.optionsStoreType = [];
    // get the array of common SLOT IDs between the provided lists
    var filteredSLOTs = this.combinePeerLists(
      scalingSelectionSLOTIDs,
      unitsSelectionSLOTIDs
    );
    var allPeersAny =
      scalingSelectionSLOTIDs == '' && unitsSelectionSLOTIDs == '';

    // Cycle through the list of Type options and add to drop down:
    //  IF the option SLOT list contains at least 1 of the SLOTs in filteredSLOTs
    //  OR both Peer Selections are 'Any'
    for (var i = 0; i < this.QuantityType_copy.length; i = i + 1) {
      // Determine the intersection of option SLOT list and filteredSLOTs
      let localQuantityTypeSlot = this.QuantityType_copy[i][
        'SLOTList'
      ].includes(',')
        ? this.QuantityType_copy[i]['SLOTList'].split(',')
        : [this.QuantityType_copy[i]['SLOTList']];

      var commonSLOTS = this.listIntersect(
        filteredSLOTs,
        localQuantityTypeSlot
      );

      if (commonSLOTS.length > 0 || allPeersAny) {
        this.optionsStoreType.push(this.QuantityType_copy[i]);
      }
    }
  }

  // Updates the Units drop down options based upon the Scaling and Type selections
  //    mySelectedIndex:  ddindex integer value for Unit dropdown selected item
  //    scalingSelectionSLOTIDs:  comma separated list of SLOT IDs, or 'Any' ('value' for Units dropdown selected item)
  //    typesSelectionSLOTIDs:  comma separated list of SLOT IDs, or 'Any' ('value' for Types dropdown selected item)
  LoadUnitOptions(
    mySelectedIndex,
    scalingSelectionSLOTIDs,
    typesSelectionSLOTIDs
  ) {
    this.optionsStoreUnit = [];

    // get the array of common SLOT IDs between the provided lists
    var filteredSLOTs = this.combinePeerLists(
      scalingSelectionSLOTIDs,
      typesSelectionSLOTIDs
    );
    var allPeersAny =
      scalingSelectionSLOTIDs == '' && typesSelectionSLOTIDs == '';

    // Cycle through the list of Units options and add to drop down:
    //  IF the option SLOT list contains at least 1 of the SLOTs in filteredSLOTs
    //  OR both Peer Selections are 'Any'
    for (var i = 0; i < this.units_copy.length; i = i + 1) {
      // Determine the intersection of option SLOT list and filteredSLOTs

      let localUniteSlot = this.units_copy[i]['SLOTList'].includes(',')
        ? this.units_copy[i]['SLOTList'].split(',')
        : [this.units_copy[i]['SLOTList']];

      var commonSLOTS = this.listIntersect(filteredSLOTs, localUniteSlot);

      if (commonSLOTS.length > 0 || allPeersAny) {
        this.optionsStoreUnit.push(this.units_copy[i]);
      }
    }

    // Select the specifed selected Scaling dropdown item if still in the list, otherwise top item selected
  }

  // Returns an array of common values among the provided commn separated string lists.
  // Excludes from processing any list where string is just 'Any'
  combinePeerLists(SLOTsList1, SLOTsList2) {
    // Establish array for filtering the options
    var combinedSLOTs = [];

    if (SLOTsList1 != '') {
      // Factor SLOT List 1 data in the return data since data is not 'Any'
      if (SLOTsList2 != '') {
        // Return value is common values in both SLOT List 1 data and SLOT List 2 data
        return this.listIntersect(
          SLOTsList1.includes(',') ? SLOTsList1.split(',') : [SLOTsList1],
          SLOTsList2.includes(',') ? SLOTsList2.split(',') : [SLOTsList2]
        );
      } else {
        // Return value is based only on SLOT List 1 data since SLOT List 2 data is 'Any'
        return SLOTsList1.includes(',') ? SLOTsList1.split(',') : [SLOTsList1];
      }
    } else {
      // Exclude SLOT List 1 data in the return data since data is 'Any'
      if (SLOTsList2 != '') {
        // Return value is based only on SLOT List 2 data since SLOT List 1 data is 'Any'
        return SLOTsList2.includes(',') ? SLOTsList2.split(',') : [SLOTsList2];
      } else {
        // Return empty array since SLOT List 1 and SLOT List 2 are both 'Any'
        return [];
      }
    }
  }

  // Return an array of elements that appear in both arrays
  listIntersect(a, b) {
    return $.grep(a, function (i) {
      return $.inArray(i, b) > -1;
    });
  }
}
