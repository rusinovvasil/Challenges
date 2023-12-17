function getVoteCount(votes) {

    let result = votes.upvotes - votes.downvotes
    console.log(result);

}
getVoteCount({ upvotes: 13, downvotes: 0 }); // ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }); // ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }); // ➞ 0


console.log("--------------------");
console.log("---Arrow Function---");


const getVoteCountArrow = (votes) => {
    return votes.upvotes - votes.downvotes;
}
console.log(getVoteCountArrow({ upvotes: 13, downvotes: 0 })); // ➞ 13
console.log(getVoteCountArrow({ upvotes: 2, downvotes: 33 })); // ➞ -31
console.log(getVoteCountArrow({ upvotes: 132, downvotes: 132 })); // ➞ 0