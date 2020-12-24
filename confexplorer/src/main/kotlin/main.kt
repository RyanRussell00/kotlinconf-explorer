import kotlinx.browser.*
import kotlinx.css.*
import react.dom.*
import styled.*

data class Video(val id: Int, val title: String, val speaker: String, val videoUrl: String)

fun main() {
    render(document.getElementById("root")) {
        child(App::class){}
    }
}