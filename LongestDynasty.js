function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longest = '';
    let longestDuration = 0;
  
    for (let i = 0; i < dynastyReign.length; i++) {
      const dynasty = Object.keys(dynastyReign[i])[0];
      const year = dynastyReign[i][dynasty];
  
      const startYear = convertYear(year);
      const endYear = (i === dynastyReign.length - 1) ? Infinity : convertYear(dynastyReign[i + 1][Object.keys(dynastyReign[i + 1])[0]]);
  
      if (startYear !== 'Invalid' && endYear !== 'Invalid') {
        const duration = endYear - startYear;
        if (duration > longestDuration) {
          longestDuration = duration;
          longest = dynasty;
        }
      }
    }
  
    return longest;
  }
  
  function convertYear(year) {
    const romanNumerals = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
    let result = 0;
  
    for (let i = 0; i < year.length; i++) {
      const current = romanNumerals[year[i]];
      const next = (i + 1 < year.length) ? romanNumerals[year[i + 1]] : 0;
  
      if (current === undefined) {
        return 'Invalid';
      }
  
      if (current < next) {
        result -= current;
      } else {
        result += current;
      }
    }
  
    return result;
  }
  
 
  var dynastyReign = [
    { "San Dynasty": "MXLI" },
    { "Viloria Dynasty": "MCCCIIII" },
    { "Tan Dynasty": "MCCCXCVIII" },
    { "Bon Dynasty": "MCDXLV" },
    { "Maiko Dynasty": "MDCLXIV" },
    { "Paul Dynasty": "MCMXLIX" },
    { "Andre Dynasty": "MMMXICX" }
  ];
  
  var longestDynasty = longestDynasty(dynastyReign);
  document.getElementById("result").textContent = "Longest Reigning Dynasty: " + longestDynasty;
  