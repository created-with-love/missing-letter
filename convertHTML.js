// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  var regExp = [/&/g, /</g, />/g, /"/g, /'/g];
  var chars = ['&amp;', '&lt;','&gt;','&quot;',"&apos;"];
  // search and replace loop
  for(var i = 0; i < chars.length; i++){
    str = regExp[i][Symbol.replace](str, chars[i]);
  }
  return str;
}


// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".

// convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".

// convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".

// convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".

// convertHTML("Schindler's List") should return "Schindler&apos;s List".

// convertHTML("<>") should return "&lt;&gt;".

// convertHTML("abc") should return "abc".