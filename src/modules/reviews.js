const reviews = () => {

    const reviews = document.getElementById('reviews');
    const blockComment = reviews.querySelector('.row');
    let timer;
    // let renderItemArr = [];
    // console.log(renderItemArr)

    const getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const {comments} = data
                
                //  let renderItemArr = data.comments;
                // console.log(renderItemArr)
                // showReviews(comments);
                // renderItemArr.push(arr);
                // console.log(renderItemArr)
                // arr.forEach(item => {
                //     console.log(item)
                //     renderItemArr.push(item);
                // });
                
                // renderComment(renderItemArr);
               timer = setInterval(() => {
                    showReviews(comments);
                }, 1000);
            
                // console.log(data)
            })
            .catch(error => console.log(error));
    };
    getData('./comments.json');



    const renderComment = (data) => {
        
        console.log(data);
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
          
            // renderItemArr.push(item);
            // localStorage.setItem('comment', JSON.stringify(renderItemArr));
            blockComment.append(div);
            clearInterval(timer);
        });
        
    };


    function showReviews(data) {
            
        

        const item = data.shift(data[0]);
        // console.log(item)
        data.push(item);
       console.log(data);
                renderComment(data);
       
                
    }

    // showReviews();


};
export default reviews;
