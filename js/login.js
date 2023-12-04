const smallStar = document.getElementById("small-stars")
const mediumStar = document.getElementById("medium-stars")
const bigStar = document.getElementById("big-stars")

const multipleBoxShadow = (num) =>{
    let stars = `${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px #FFF`
  for (i = 2; i < num; i++) {
    stars += `, ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px ${Math.floor(Math.random() * (2000 - 0 + 1)) + 0}px #FFF`
  }

  return stars
}

function getRuleWithSelector(selector) {
    var numSheets = document.styleSheets.length,
      numRules,
      sheetIndex,
      ruleIndex;

    for (sheetIndex = 0; sheetIndex < numSheets; sheetIndex += 1) {
      numRules = document.styleSheets[sheetIndex].cssRules.length;
      for (ruleIndex = 0; ruleIndex < numRules; ruleIndex += 1) {
        if (document.styleSheets[sheetIndex].cssRules[ruleIndex].selectorText === selector) {
          return document.styleSheets[sheetIndex].cssRules[ruleIndex];
        }
      }
    }
  }
window.onload = function() {
    let smallStarAfter = getRuleWithSelector('#small-stars::after');
            let mediumStarAfter = getRuleWithSelector('#medium-stars::after');
            let bigStarAfter = getRuleWithSelector('#big-stars::after');

            smallStarAfter.style.boxShadow = multipleBoxShadow(700)
            mediumStarAfter.style.boxShadow = multipleBoxShadow(200)
            bigStarAfter.style.boxShadow = multipleBoxShadow(100)

            smallStar.style.boxShadow = multipleBoxShadow(700)
            mediumStar.style.boxShadow = multipleBoxShadow(200)
            bigStar.style.boxShadow = multipleBoxShadow(100)
}