import Image from "next/image";
import { createApi } from "unsplash-js";

export default function Photos({ data }) {
  const Photo = ({ photo }) => {
    const { user, urls, links } = photo

    return (
      <article className="photo">
        <a href={links.html}>
          <Image
            src={urls.small}
            width="400"
            height="280"
          />
        </a>
        <small style={{ color: 'white' }}>{user.name}</small>
      </article>
    )
  }

  return data ? (
    <div className="photos-container">
      {data.map((pic) => {
        return <Photo photo={pic} />
      })}
    </div>
  ) : <p>loading...</p>;
}
export async function getServerSideProps() {
  const api = createApi({
    accessKey: "1h-h4IzYTRyM07EXYypkwFsHpl1zjoEsT32AvfEpGfw"
  });

  const data = await api.search
    .getPhotos({ query: "dolomites", orientation: "landscape", })
    .then(data => data.response.results)
    .catch(() => {
      console.log("something went wrong!");
    });

  return {
    props: {
      data
    }
  }
}
