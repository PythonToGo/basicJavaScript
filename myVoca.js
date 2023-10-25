let myVoca = {
    addVoca: function(voca, meaning) {
      myVoca[voca] = meaning;
    },
    deleteVoca: function(voca) {
      delete myVoca[voca];
    },
    printVoca: function(voca, meaning){
      meaning = myVoca[voca];
      console.log(`"${voca}"의 뜻은 "${meaning}"입니다.`);
    }
  };
  
  // Test Code for addVoca METHOD
  myVoca.addVoca('parameter', '매개 변수');
  myVoca.addVoca('element', '요소');
  myVoca.addVoca('property', '속성');
  console.log(myVoca);
  
  // Test Code for deleteVoca METHOD
  myVoca.deleteVoca('parameter');
  myVoca.deleteVoca('element');
  console.log(myVoca);
  
  // Test Code for printVoca METHOD
  myVoca.printVoca('property');
  
  
  