import kotlinx.css.*
import react.*
import react.dom.*
import styled.css
import styled.styledDiv

class App : RComponent<RProps, AppState>() {
    override fun RBuilder.render() {
        h1 {
            + "KotlinConf Explorer"
        }
        div {
            h3 {
                + "Videos to Watch"
            }
            child(VideoList::class){
                attrs.videos = unwatchedVideos
                attrs.selectedVideo = state.currentVideo
                attrs.onSelectVideo = { video ->
                    setState {
                        currentVideo = video
                    }
                }
            }
            h3 {
                + "Watched Videos"
            }
            child(VideoList::class){
                attrs.videos = watchedVideos
                attrs.selectedVideo = state.currentVideo
                attrs.onSelectVideo = { video ->
                    setState {
                        currentVideo = video
                    }
                }
            }
        }
        styledDiv {
            css {
                position = Position.absolute
                top = 10.px
                right = 10.px
            }
            h3 {
                +  "John Doe: Building and Breaking things"
            }
            img {
                attrs {
                    src = "https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder"
                }
            }
        }
    }
}
external interface AppState: RState {
    var currentVideo: Video?
}