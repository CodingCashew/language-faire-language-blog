import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { AiFillLike, AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import NavButtons from "../../components/navButtons";
import ReactHtmlParser from "react-html-parser";
import { Article as ArticleType } from '../../shared/interfaces/article.interface.js';
import { Comment } from '../../shared/interfaces/comment.interface.js';

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.langfaring.com'}/api/articles/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const numOfArticles = data.length;
  let article = data.filter((article:ArticleType) => article.url == context.query.url);

  article = article[0];

  return {
    props: { article, numOfArticles, articles: data},
  };
};

export default function Article({ article, numOfArticles, articles }: {article: ArticleType, numOfArticles: number, articles: ArticleType[]}) {
  const section = "articles";
  const [numOfLikes, setNumOfLikes] = useState(article.likes);
  const [numOfShares, setNumOfShares] = useState(article.shares);
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    const previousLikeCount = numOfLikes;
    // if it was already liked, remove it
    if (liked) {
      setLiked(false);
      const res = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify({ addOrRemoveLike: "removeLike", id: article.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNumOfLikes(previousLikeCount - 1);
    }
    // if it wasn't previously liked, add it
    else {
      setLiked(true);
      const res = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify({ addOrRemoveLike: "addLike", id: article.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNumOfLikes(previousLikeCount + 1);
    }
  };
  const handleShare = async () => {
    const previousShareCount = numOfShares;
    const res = await fetch("/api/share", {
      method: "POST",
      body: JSON.stringify({ addShare: 1, id: article.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setNumOfShares((previousShareCount || 0) + 1);
  };

  const [comments, setComments] = useState<Comment[]>(article.comments);
  const [isCommenting, setIsCommenting] = useState(false);

  const initialCommentValues = {
    commenter: "",
    content: "",
  };
  const handleCommenting = () => {
    isCommenting ? setIsCommenting(false) : setIsCommenting(true);
  };
  const [currentComment, setCurrentComment] = useState(initialCommentValues);
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setCurrentComment({
      ...currentComment,
      [name]: value,
    });
  };

  const postComment = async (e:any) => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        content: currentComment.content,
        id: article.id,
        name: currentComment.commenter,
        date: new Date().toDateString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setComments([currentComment, ...comments]);
    setCurrentComment(initialCommentValues);
    setIsCommenting(false);
  };

  return (
    <Flex
      direction="column"
      minH="sm"
      pt={5}
      bgGradient="linear(to-br, primary.light, secondary.main)"
    >
      <Head>
        <title>{article.title}</title>
        <link rel="icon" href="../logo.png" sizes="any" />
      </Head>
      <Flex justify="center">
        {/* <Sidebar links={blogLinks} section={"articles"} /> */}
        <Flex
          flexDirection="column"
          maxW={{ base: "95%", md: "80%", lg: "65%" }}
        >
          <Card key={article.id}>
            <CardHeader>
              <Heading size="md" m={5} alignSelf="center" color="tertiary.dark">
                {article.title}
              </Heading>
            </CardHeader>
            <Image
              maxW={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
              px={3}
              alignSelf="center"
              src={article.imagePath}
              alt={article.title}
            />
            <CardBody m={5}>{ReactHtmlParser(article.content)}</CardBody>
            <Flex flexDirection="column" >
              <Text alignSelf="flex-end" pr={6}>
                {numOfLikes > 0 &&
                  `${numOfLikes}${numOfLikes > 1 ? " Likes" : " Like"}`}
              </Text>
              {/* <Text alignSelf="flex-end" pt={3} pr={6}>
                {numOfShares > 0 &&
                  `${numOfShares}${numOfShares > 1 ? " Shares" : " Share"}`}
              </Text> */}
            </Flex>
            <CardFooter
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost" m={3} onClick={handleLike}>
                Like{!liked && <AiOutlineLike />}
                {liked && <AiFillLike />}
              </Button>
              <Button flex="1" variant="ghost" m={3} onClick={handleCommenting}>
                Comment <AiOutlineComment />
              </Button>
              {/* <Button flex="1" variant="ghost" m={3} onClick={handleShare}>
                Share
                <AiOutlineShareAlt pl={6} />
              </Button> */}
              <Divider />
              {!comments.length && !isCommenting && (
                <Text m={8} color="tertiary.dark">
                  Be the first to comment!
                </Text>
              )}
              {isCommenting && (
                <Flex direction="column" gap="3" w="100%" p={3}>
                  <Input
                    placeholder="Name"
                    onChange={handleChange}
                    value={currentComment.commenter}
                    name="commenter"
                    required
                  />
                  <Textarea
                    placeholder="Leave a Comment"
                    onChange={handleChange}
                    value={currentComment.content}
                    name="content"
                    required
                  />
                  <Button
                    backgroundColor="secondary.dark"
                    color="white"
                    onClick={postComment}
                    mt={3}
                  >
                    Add Comment
                  </Button>
                  <Button
                    variant="ghost"
                    maxW="sm"
                    alignSelf="center"
                    onClick={handleCommenting}
                  >
                    Cancel
                  </Button>
                </Flex>
              )}
              <Container>
                {comments.length > 0 &&
                  comments.map((comment:Comment, i:number) => (
                    <Flex key={i} direction="column" maxW="lg">
                      <Flex direction="row" justifyContent="space-between">
                        <Text pt={5} fontSize="sm" color="grey">
                          {comment.commenter}
                        </Text>
                        <Text pt={5} fontSize="sm" color="grey">
                          {new Date(comment.date_written || Date.now()).toDateString()}
                        </Text>
                      </Flex>
                      <Text minW="3xl">{comment.content}</Text>
                    </Flex>
                  ))}
              </Container>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
      <NavButtons numOfExercises={numOfArticles} section={section} id={article.id} articles={articles}/>
    </Flex>
  );
}
