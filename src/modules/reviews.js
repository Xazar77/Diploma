const reviews = () => {

    const reviews = document.getElementById('reviews');
    const blockComment = reviews.querySelector('.row');
    
    let renderItemArr = [];
    // console.log(renderItemArr)

    const getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const { comments } = data;
                renderItemArr = comments;
                renderComment(renderItemArr);
                setInterval(() => {
                    showReviews();
                }, 1000);
            
                // console.log(data)
            })
            .catch(error => console.log(error));
    };
    getData('./comments.json');



    const renderComment = (data) => {
        
        // console.log(arr);
        data.forEach((item, index) => {
            // console.log(index)
            let { id, image, author, comment } = item;
            // console.log(image);
            if (image == '') {
                image = "face2.png";
            }
            const div = document.createElement('div');
            div.classList.add('col-sm-offset-1');
            div.classList.add('col-xs-12');
            div.classList.add('comments-container');
            
            // if (id > 2) {
            //     div.classList.add('hidden');
            // }
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
            
        });
        
    };


    function showReviews() {
        // const userArr = JSON.parse(localStorage.getItem('comment'));
        // console.log(userArr);
       
        // renderItemArr.forEach((item, id) => {
            // console.log(item);
            // if (id == 0) {
            //     let eee = renderItemArr.shift(id);
            //     renderItemArr.push(eee);
            //     renderComment(renderItemArr)
            // //     return renderItemArr;
            // }
        // })


        const item = renderItemArr.shift(renderItemArr[0]);
        renderItemArr.push(item);
        // renderComment(renderItemArr)
        // console.log(renderItemArr)

        // 
        // console.log(newArr);
        // renderComment(userArr);
        // setInterval(() => {
        //     let elem = userArr.shift();
            
        // }, 1000);
        //     // renderComment(userArr);
        //    renderItemArr.push(elem);



        // userArr.forEach((elem, index) => {

        //     // console.log(elem);
        //     // console.log(index);
            
        // let arr = [2, 3, 54, 4, 5, 23, 27, 77];
        // console.log(arr);
        // let el = arr.shift();
        // console.log(arr);
        // arr.push(el);
        // console.log(arr);



        // });
       
    }

    // showReviews();


};
export default reviews;
