var _s = require("underscore.string");
MessageHex = "6864019E6963ACCF232A5FFA20202020202065000000738C840100000000840100000000000000007401FE229611200247021D02260237022202130247021D0225023502240213029D063802220213029D0638028F0620028F062B028606830245061F028F06120248021F028F062B028506370222022B0230021D022602350291062002230235022402130247022002230237028F061F0291062B0286063802220213029D0638028F0621028F062B02119C2823C8081E02FFFFF67701002423C7081E02FFFF047801000E23E0081F02FFFF057801001023C5083802FFFF087801002A23C6082102FFFF0B7801001123E0082002FFFF037801002A23C7081D02FFFFFF7701002823C7081D02FFFF0B7801002923C7081E02FFFF0E7801002723C9082002FFFF0C7801002A23C7082002FFFF0F7801002923C8081D02FFFF117801002B23C5082002FFFF0E7801002723C6081D02FFFF077801002C23C5082002FFFF0F7801002823C6082202FFFF117801002823C6082102FFFF0D7801002C23C5081D02FFFF0A7801002423C7081F02FFFF087801002A23C7081E020000";

function decimalToHexString(number) {
    if (number < 0) {
    	number = 0xFF + number + 1;
    }

    return number.toString(16).toUpperCase();
}

str1 = "6864019e6963accf232a5ffa20202020202065000000738c840100000000840100000000000000007401fe229611200247021d02260237022202130247021d0225023502240213029d063802220213029d0638028f0620028f062b028606830245061f028f06120248021f028f062b028506370222022b0230021d022602350291062002230235022402130247022002230237028f061f0291062b0286063802220213029d0638028f0621028f062b02119c2823c8081e02fffff67701002423c7081e02ffff047801000e23e0081f02ffff057801001023c5083802ffff087801002a23c6082102ffff0b7801001123e0082002ffff037801002a23c7081d02ffffff7701002823c7081d02ffff0b7801002923c7081e02ffff0e7801002723c9082002ffff0c7801002a23c7082002ffff0f7801002923c8081d02ffff117801002b23c5082002ffff0e7801002723c6081d02ffff077801002c23c5082002ffff0f7801002823c6082202ffff117801002823c6082102ffff0d7801002c23c5081d02ffff0a7801002423c7081f02ffff087801002a23c7081e020000".toLowerCase();

str2 = "6864019E6963ACCF232A5FFA202020202020650000006D82840100000000840100000000000000007401FE229611200247021D02260237022202130247021D0225023502240213029D063802220213029D0638028F0620028F062B028606830245061F028F06120248021F028F062B028506370222022B0230021D022602350291062002230235022402130247022002230237028F061F0291062B0286063802220213029D0638028F0621028F062B02119C2823C8081E02FFFFF67701002423C7081E02FFFF047801000E23E0081F02FFFF057801001023C5083802FFFF087801002A23C6082102FFFF0B7801001123E0082002FFFF037801002A23C7081D02FFFFFF7701002823C7081D02FFFF0B7801002923C7081E02FFFF0E7801002723C9082002FFFF0C7801002A23C7082002FFFF0F7801002923C8081D02FFFF117801002B23C5082002FFFF0E7801002723C6081D02FFFF077801002C23C5082002FFFF0F7801002823C6082202FFFF117801002823C6082102FFFF0D7801002C23C5081D02FFFF0A7801002423C7081F02FFFF087801002A23C7081E020000".toLowerCase();

6864019e6963accf232a5ffa20202020202065000000738c840100000000840100000000000000007401fe229611200247021d02260237022202130247021d0225023502240213029d063802220213029d0638028f0620028f062b028606830245061f02
8f06120248021f028f062b028506370222022b0230021d022602350291062002230235022402130247022002230237028f061f0291062b0286063802220213029d0638028f0621028f062b02119c2823c8081e02fffff67701002423c7081e02ffff0478
01000e23e0081f02ffff057801001023c5083802ffff087801002a23c6082102ffff0b7801001123e0082002ffff037801002a23c7081d02ffffff7701002823c7081d02ffff0b7801002923c7081e02ffff0e7801002723c9082002ffff0c7801002a23
c7082002ffff0f7801002923c8081d02ffff117801002b23c5082002ffff0e7801002723c6081d02ffff077801002c23c5082002ffff0f7801002823c6082202ffff117801002823c6082102ffff0d7801002c23c5081d02ffff0a7801002423c7081f02
ffff087801002a23c7081e020000
6864019e6963accf232a5ffa202020202020650000006d82840100000000840100000000000000007401fe229611200247021d02260237022202130247021d0225023502240213029d063802220213029d0638028f0620028f062b028606830245061f02
8f06120248021f028f062b028506370222022b0230021d022602350291062002230235022402130247022002230237028f061f0291062b0286063802220213029d0638028f0621028f062b02119c2823c8081e02fffff67701002423c7081e02ffff0478
01000e23e0081f02ffff057801001023c5083802ffff087801002a23c6082102ffff0b7801001123e0082002ffff037801002a23c7081d02ffffff7701002823c7081d02ffff0b7801002923c7081e02ffff0e7801002723c9082002ffff0c7801002a23
c7082002ffff0f7801002923c8081d02ffff117801002b23c5082002ffff0e7801002723c6081d02ffff077801002c23c5082002ffff0f7801002823c6082202ffff117801002823c6082102ffff0d7801002c23c5081d02ffff0a7801002423c7081f02
ffff087801002a23c7081e020000
