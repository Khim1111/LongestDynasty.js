var dynastyReign = [
    { 'San Dynasty': 'MXLI' },
    { 'Viloria Dynasty': 'MCCCIIII' },
    { 'Tan Dynasty': 'MCCCXCVIII' },
    { 'Bon Dynasty': 'MCDXLV' },
    { 'Maiko Dynasty': 'MDCLXIV' },
    { 'Paul Dynasty': 'MCMXLIX' },
    { 'Andre Dynasty': 'MMMXICX' },
  ];
  
  function longestDynasty (dynastyReign) {
    if (dynastyReign.length < 1) return 'No Data';
  
    const filtered = dynastyReign
      .filter(y => convertYear(Object.values(y).toString()) !== null)
    const fValues = filtered
      .map(el => convertYear(Object.values(el).toString()))
  
    let reign = 0;
    let max = 0;
    let temp = 0;
    for (let i = 1; i < fValues.length; i++) {
      temp = Math.abs(fValues[i] - fValues[i - 1])
      if (temp > max) {
        max = temp
        reign = i
      }
    }
    return filtered[reign];
  
  }
  
  function convertYear (year) {
    let y = 0;
    if (typeof y === 'undefined' || y === null) return y;
  
    let regex = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
    if (!regex.test(year)) return null;
  
    let romanMap = new Map();
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
  
    let l = year.length;
    for (var i = 0; i < l; i++) {
      if (romanMap.get(year.charAt(i)) < romanMap.get(year.charAt(i + 1))) {
        y -= romanMap.get(year.charAt(i))
      } else {
        y += romanMap.get(year.charAt(i))
      }
    }
  
    return y;
  }
  
  console.log(longestDynasty(dynastyReign));

  document.write(JSON.stringify(longestDynasty(dynastyReign)));