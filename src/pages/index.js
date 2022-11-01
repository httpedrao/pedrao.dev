import { Content, LayoutWrapper } from "../components/Wrapper";

import Head from "next/head";
import { Image } from "../components/Image";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
      <Content>
        <Image src="http://placekitten.com/500/500" />
      </Content>
  );
}
