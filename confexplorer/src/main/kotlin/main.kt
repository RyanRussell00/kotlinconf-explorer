import kotlinx.browser.*
import kotlinx.css.*
import react.dom.*
import styled.*

data class Video(val id: Int, val title: String, val speaker: String, val videoUrl: String)
val unwatchedVideos = listOf(
    Video(1, "Title", "Speaker", "www.youtube.com"),
    Video(2, "Title", "Speaker", "www.youtube.com"),
    Video(3, "Title", "Speaker", "www.youtube.com")
)
val watchedVideos = listOf(
    Video(4, "Seen Video Title", "Speaker", "www.youtube.com"),
)

fun main() {
    render(document.getElementById("root")) {
        child(App::class){}
    }
}