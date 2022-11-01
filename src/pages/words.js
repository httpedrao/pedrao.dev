import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import { PostList, PostPreview, PostTitle } from "../components/PostPreview";

export default function Words({ posts }) {
  return (
    <PostList>
      {Array.from(Array(10).keys()).map((arrIndex) => {
        const { title, slug } = posts[0].frontmatter;
        return (
          <PostPreview key={arrIndex}>
            <PostTitle>{title}</PostTitle>
            <div
              dangerouslySetInnerHTML={{
                __html: md().render(posts[0].content),
              }}
            />
          </PostPreview>
        );
      })}
      {/* {posts.map((post) => {
            const { title, slug } = post.frontmatter;
            return (
              <PostPreview key={slug}>
                <PostTitle>{title}</PostTitle>
                <PostContent
                  dangerouslySetInnerHTML={{
                    __html: md().render(post.content),
                  }}
                />
              </PostPreview>
            );
          })} */}
    </PostList>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);

    return {
      slug,
      frontmatter,
      content,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
