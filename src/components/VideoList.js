import VideoItem from "./VideoItem"

export default function VideoList({ videos , onVideoSelect}) {

    const renderList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
    })

    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}
