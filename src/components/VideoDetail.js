import React from 'react'

export default function VideoDetail({ video }) {

    const videosrc = `https://www.youtube.com/embed/${video?.id.videoId}`

    return (
        <div>
            {video &&
                <div>
                    <div className="ui embed">
                        <iframe title="video.snippet.title" 
                        src={videosrc}></iframe>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">
                            {video?.snippet.title}
                        </h4>
                        <p>{video?.snippet.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}
