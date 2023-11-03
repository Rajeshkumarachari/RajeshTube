import React from "react";

const commentsData = [
  {
    name: "Rajesh",
    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
    replies: [
      {
        name: "Jaikumr",
        text: "Sir Does prior react js knowlege require to follow this series kindly reply bhaiya By the way loving your content and learning many things from you ❤️",
        replies: [],
      },
      {
        name: "Vijay",
        text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
        replies: [
          {
            name: "Kiran",
            text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
            replies: [
              {
                name: "Elakatur",
                text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
                replies: [
                  {
                    name: "Jaani",
                    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
                    replies: [],
                  },
                  {
                    name: "Bhanu",
                    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
                    replies: [],
                  },
                ],
              },
              {
                name: "Muni",
                text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vijay",
    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
    replies: [
      {
        name: "Vamshi",
        text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
        replies: [],
      },
    ],
  },
  {
    name: "Naresh",
    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
    replies: [],
  },
  {
    name: "Dinesh",
    text: "Good videos like it Thank you so much sir for telling us the concept of DOT, Its working , great",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2  rounded-md  my-2">
      <img
        className=" h-10 "
        src="data:image/jpeg;base64,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"
        alt="user"
      />
      <div className="px-3">
        <p className=" font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border botder-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className=" text-2xl font-bold ">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
