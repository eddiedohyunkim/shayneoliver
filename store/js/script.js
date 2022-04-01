var WorH = 'height:100vh;';
	var size = 1;
	var columnNumber = 4;
	var categoryGap = 0;
	document.body.setAttribute('style','display:grid; grid-template-columns: 100%; grid-auto-rows:auto; row-gap:'+categoryGap+'px;');
	document.getElementById('imageContainer1').setAttribute('style','width:100%; grid-column:1 / 2; grid-row: 1 / 2; display:grid; grid-template-columns:repeat('+columnNumber+',1fr); grid-auto-rows:auto; column-gap: 10px;');

	

	pc();
	function pc(){
		
		var numberOfItems = 2;

		// create boxes in 4 column layout
		for(var i=0; i<numberOfItems*4; i+=1){
			var box = document.createElement('div');
			box.setAttribute('id', 'box'+i);
			box.setAttribute('class', 'boxes')
			box.setAttribute('style', 'width:100%; height:100%;');
			document.getElementById('imageContainer1').appendChild(box);
		}


		// item images 

		// item 1
		for(var i=0; i<3; i+=1){
			var image = document.createElement('img');
			image.setAttribute('src', 'https://eddiedohyunkim.github.io/shayneoliver/assets/image/colmar/colmar1/scan'+i+'.jpg');
			image.setAttribute('style', 'width:100%;');
			image.setAttribute('id', 'image'+i)
			document.getElementById('box'+i).appendChild(image);	
		}
		
		// item 2
		for(var i=4; i<7; i+=1){
			var image = document.createElement('img');
			image.setAttribute('src', 'https://eddiedohyunkim.github.io/shayneoliver/assets/image/colmar/colmar1/scan'+i+'.jpg');
			image.setAttribute('style', 'width:100%;');
			image.setAttribute('id', 'image'+i)
			document.getElementById('box'+i).appendChild(image);	
		}

		// buy buttons

		// buy button for item 1
		var buycontainer1 = document.getElementById('box3');
		buycontainer1.setAttribute('style', 'display:grid; grid-template-columns: 1fr; grid-template-rows:repeat(5,1fr); ')
		var shopBtn1 = document.createElement('div');
		shopBtn1.setAttribute('id','product-component-1648607874670');
		shopBtn1.setAttribute('style','gird-column:1/2; grid-row:3/4; margin:auto;')
		document.getElementById('box3').appendChild(shopBtn1);
		
	}