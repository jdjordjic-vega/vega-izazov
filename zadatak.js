const zad1 = (num) => {
	var sum = 0;
  var chars = num.toString().split("");
  chars.forEach((char) => {
  	sum += faktorijel(parseInt(char));
  })
  return sum;
}

const faktorijel = (n) => {
	if (n == 0){
  	return 1;
  }
  return n * faktorijel(n-1);
}

const zad2 = (rec, brMesta) => {
	var rec = rec.toLowerCase();
  var noviNiz = [];
	const slova = rec.split("");
  var NoviBrMesta=brMesta
  if (NoviBrMesta > 26)  {
   NoviBrMesta = NoviBrMesta % 26
  }
 
 
  slova.forEach((slovo) => {
 	  var position = slovo.charCodeAt(0)
  	if (position >= "a".charCodeAt(0) && position < "z".charCodeAt(0)) {
    	position = slovo.charCodeAt(0) + NoviBrMesta;
     
    	 while (position > 122){
        position = (position % 122);
        position += 96;
      }

    }
    noviNiz.push(String.fromCharCode(position))
  })
  return noviNiz.join("");
}
const rec = "trece mesto";
console.log(zad2(rec, 363603))
const a = zad1(9602)
console.log(a)
