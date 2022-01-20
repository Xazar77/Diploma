const reviews = () => {

    const reviews = document.getElementById('reviews');
    const blockComment = reviews.querySelector('.row');

    let timer;

    const statusImg = document.createElement('img');
    const loadText = 'images/Animation.png';
    statusImg.style.cssText = `
    display: block;
    margin: 0 auto;
    text-align:center;
`;
    statusImg.src = loadText;
    blockComment.append(statusImg);

    const getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
              
                const {comments} = data
                
               
               timer = setInterval(() => {
                    showReviews(comments);
                }, 10000);
            
                
            })
            .catch(error => console.log(error));
    };
    getData('./comments.json');



    const renderComment = (data) => {
        blockComment.innerHTML = '';
        
       
        // console.log(data);
        data.forEach((item, index) => {
            // console.log(item)
            let { id, image, author, comment } = item;
            // console.log(image);
            if (image == '') {
                image = "avatar.png";
            }
            const div = document.createElement('div');
            div.classList.add('col-sm-offset-1');
            div.classList.add('col-xs-12');
            div.classList.add('comments-container');
            
            if (index > 2) {
                div.classList.add('hidden');
            }
            if (index == 0) {
                div.innerHTML = `
                <div class="review-margin-bottom row comment-item  ">
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${image}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-green review-arrow review-arrow-left">
                            <p class="text-normal">${author}</p>
                            <p>${comment}</p>
                        </div>
                    </div>
                </div> `;
            }
            if (index == 1) {
                div.innerHTML = ` 
            
                <div class="review-margin-bottom row comment-item"  ">
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-gray review-arrow review-arrow-right">
                            <p class="text-normal">${author}</p>
                            <p>${comment}</p>
                        </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${image}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                </div>`;
            }
            if (index == 2) {
                div.innerHTML = `
            
                <div class="row comment-item  ">
                    <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="images/users/${image}" alt="" class="img-responsive avatar">
                        </div>
                    </div>
                    <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-orange review-arrow review-arrow-left">
                            <p class="text-normal">${author}</p>
                            <p>${comment}</p>
                        </div>
                    </div>
                </div>
                `;
            }
          
            
            blockComment.append(div);
           
        });
        
    };


    function showReviews(data) {
        const item = data.shift(data[0]);
       
        data.push(item);
      
        renderComment(data);
       
                
    }

  


};
export default reviews;
