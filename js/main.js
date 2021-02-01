fetch("https://divyateja2.github.io/ecommerce/data/data.json").then(responce=>{
	return responce.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){

	
	var bodyElement=document.querySelector("body");
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center");
	bodyElement.append(row)
	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(column)

		// Card..//

		var card=document.createElement("div");
		card.classList.add("card","mt-3")

		// Card-Body..//

		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")

		// Image...//

		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name;

		// Name..//

		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-success")

		// Price..//

		var price=document.createElement("p");
		price.classList.add("text-secondary","text-center")
		price.innerHTML="<s>₹"+value.price+ "/-</s>";

		// Original Price..//

		var originalPrice=document.createElement("p");
		originalPrice.classList.add("text-danger","text-center")
		originalPrice.innerHTML="₹"+value.originalPrice+ "/-";

		// Button..//

		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2");

		var button=document.createElement("button");
		button.classList.add("btn","btn-primary","btn-block");
		button.textContent="Add to Cart"
		buttonParent.append(button)


		cardBody.append(imageElement)
		
		cardBody.append(name)
		cardBody.append(price)
		cardBody.append(originalPrice)
		cardBody.append(buttonParent)
		card.append(cardBody);
		column.append(card);


	})
	}
	 
	 
