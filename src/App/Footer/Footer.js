import React from "react"
import "./Footer.css"
import logo from "./logo.png"



const Footer = () => {

    return (
        <div className="footer">
            <div className="container ">
                <div className="row footer_logo_row">
                    <img src={logo} alt="menthhealth" className="col" />
                    <div className="col">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" alt="" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUxMiw5Ny4yNDhjLTE5LjA0LDguMzUyLTM5LjMyOCwxMy44ODgtNjAuNDgsMTYuNTc2YzIxLjc2LTEyLjk5MiwzOC4zNjgtMzMuNDA4LDQ2LjE3Ni01OC4wMTYgICAgYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTIgICAgYzAsOC4zMiwwLjcwNCwxNi4zMiwyLjQzMiwyMy45MzZjLTg3LjI2NC00LjI1Ni0xNjQuNDgtNDYuMDgtMjE2LjM1Mi0xMDkuNzkyYy05LjA1NiwxNS43MTItMTQuMzY4LDMzLjY5Ni0xNC4zNjgsNTMuMDU2ICAgIGMwLDM2LjM1MiwxOC43Miw2OC41NzYsNDYuNjI0LDg3LjIzMmMtMTYuODY0LTAuMzItMzMuNDA4LTUuMjE2LTQ3LjQyNC0xMi45MjhjMCwwLjMyLDAsMC43MzYsMCwxLjE1MiAgICBjMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5MiAgICBjMTMuNiw0MS41NjgsNTIuMTkyLDcyLjEyOCw5OC4wOCw3My4xMmMtMzUuNzEyLDI3LjkzNi04MS4wNTYsNDQuNzY4LTEzMC4xNDQsNDQuNzY4Yy04LjYwOCwwLTE2Ljg2NC0wLjM4NC0yNS4xMi0xLjQ0ICAgIEM0Ni40OTYsNDQ2Ljg4LDEwMS42LDQ2NCwxNjEuMDI0LDQ2NGMxOTMuMTUyLDAsMjk4Ljc1Mi0xNjAsMjk4Ljc1Mi0yOTguNjg4YzAtNC42NC0wLjE2LTkuMTItMC4zODQtMTMuNTY4ICAgIEM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" alt="" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMi4zMjYgMGMtNi41NzkuMDAxLTEwLjA3NiA0LjIxNi0xMC4wNzYgOC44MTIgMCAyLjEzMSAxLjE5MSA0Ljc5IDMuMDk4IDUuNjMzLjU0NC4yNDUuNDcyLS4wNTQuOTQtMS44NDQuMDM3LS4xNDkuMDE4LS4yNzgtLjEwMi0uNDE3LTIuNzI2LTMuMTUzLS41MzItOS42MzUgNS43NTEtOS42MzUgOS4wOTMgMCA3LjM5NCAxMi41ODIgMS41ODIgMTIuNTgyLTEuNDk4IDAtMi42MTQtMS4xNzYtMi4yNjEtMi42MzEuNDI4LTEuNzMzIDEuMjY2LTMuNTk2IDEuMjY2LTQuODQ1IDAtMy4xNDgtNC42OS0yLjY4MS00LjY5IDEuNDkgMCAxLjI4OS40NTYgMi4xNTkuNDU2IDIuMTU5cy0xLjUwOSA2LjA5Ni0xLjc4OSA3LjIzNWMtLjQ3NCAxLjkyOC4wNjQgNS4wNDkuMTExIDUuMzE4LjAyOS4xNDguMTk1LjE5NS4yODguMDczLjE0OS0uMTk1IDEuOTczLTIuNzk3IDIuNDg0LTQuNjc4LjE4Ni0uNjg1Ljk0OS0zLjQ2NS45NDktMy40NjUuNTAzLjkwOCAxLjk1MyAxLjY2OCAzLjQ5OCAxLjY2OCA0LjU5NiAwIDcuOTE4LTQuMDQgNy45MTgtOS4wNTMtLjAxNi00LjgwNi00LjEyOS04LjQwMi05LjQyMy04LjQwMnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" alt=""/>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTEwLjk0OTIxOSAxNTAuNWMtMS4xOTkyMTktMjcuMTk5MjE5LTUuNTk3NjU3LTQ1Ljg5ODQzOC0xMS44OTg0MzgtNjIuMTAxNTYyLTYuNS0xNy4xOTkyMTktMTYuNS0zMi41OTc2NTctMjkuNjAxNTYyLTQ1LjM5ODQzOC0xMi44MDA3ODEtMTMtMjguMzAwNzgxLTIzLjEwMTU2Mi00NS4zMDA3ODEtMjkuNS0xNi4yOTY4NzYtNi4zMDA3ODEtMzQuODk4NDM4LTEwLjY5OTIxOS02Mi4wOTc2NTctMTEuODk4NDM4LTI3LjQwMjM0My0xLjMwMDc4MS0zNi4xMDE1NjItMS42MDE1NjItMTA1LjYwMTU2Mi0xLjYwMTU2MnMtNzguMTk5MjE5LjMwMDc4MS0xMDUuNSAxLjVjLTI3LjE5OTIxOSAxLjE5OTIxOS00NS44OTg0MzggNS42MDE1NjItNjIuMDk3NjU3IDExLjg5ODQzOC0xNy4yMDMxMjQgNi41LTMyLjYwMTU2MiAxNi41LTQ1LjQwMjM0MyAyOS42MDE1NjItMTMgMTIuODAwNzgxLTIzLjA5NzY1NyAyOC4zMDA3ODEtMjkuNSA0NS4zMDA3ODEtNi4zMDA3ODEgMTYuMzAwNzgxLTEwLjY5OTIxOSAzNC44OTg0MzgtMTEuODk4NDM4IDYyLjA5NzY1Ny0xLjMwMDc4MSAyNy40MDIzNDMtMS42MDE1NjIgMzYuMTAxNTYyLTEuNjAxNTYyIDEwNS42MDE1NjJzLjMwMDc4MSA3OC4xOTkyMTkgMS41IDEwNS41YzEuMTk5MjE5IDI3LjE5OTIxOSA1LjYwMTU2MiA0NS44OTg0MzggMTEuOTAyMzQzIDYyLjEwMTU2MiA2LjUgMTcuMTk5MjE5IDE2LjU5NzY1NyAzMi41OTc2NTcgMjkuNTk3NjU3IDQ1LjM5ODQzOCAxMi44MDA3ODEgMTMgMjguMzAwNzgxIDIzLjEwMTU2MiA0NS4zMDA3ODEgMjkuNSAxNi4zMDA3ODEgNi4zMDA3ODEgMzQuODk4NDM4IDEwLjY5OTIxOSA2Mi4xMDE1NjIgMTEuODk4NDM4IDI3LjI5Njg3NiAxLjIwMzEyNCAzNiAxLjUgMTA1LjUgMS41czc4LjE5OTIxOS0uMjk2ODc2IDEwNS41LTEuNWMyNy4xOTkyMTktMS4xOTkyMTkgNDUuODk4NDM4LTUuNTk3NjU3IDYyLjA5NzY1Ny0xMS44OTg0MzggMzQuNDAyMzQzLTEzLjMwMDc4MSA2MS42MDE1NjItNDAuNSA3NC45MDIzNDMtNzQuODk4NDM4IDYuMjk2ODc2LTE2LjMwMDc4MSAxMC42OTkyMTktMzQuOTAyMzQzIDExLjg5ODQzOC02Mi4xMDE1NjIgMS4xOTkyMTktMjcuMzAwNzgxIDEuNS0zNiAxLjUtMTA1LjVzLS4xMDE1NjItNzguMTk5MjE5LTEuMzAwNzgxLTEwNS41em0tNDYuMDk3NjU3IDIwOWMtMS4xMDE1NjIgMjUtNS4zMDA3ODEgMzguNS04LjgwMDc4MSA0Ny41LTguNjAxNTYyIDIyLjMwMDc4MS0yNi4zMDA3ODEgNDAtNDguNjAxNTYyIDQ4LjYwMTU2Mi05IDMuNS0yMi41OTc2NTcgNy42OTkyMTktNDcuNSA4Ljc5Njg3Ni0yNyAxLjIwMzEyNC0zNS4wOTc2NTcgMS41LTEwMy4zOTg0MzggMS41cy03Ni41LS4yOTY4NzYtMTAzLjQwMjM0My0xLjVjLTI1LTEuMDk3NjU3LTM4LjUtNS4yOTY4NzYtNDcuNS04Ljc5Njg3Ni0xMS4wOTc2NTctNC4xMDE1NjItMjEuMTk5MjE5LTEwLjYwMTU2Mi0yOS4zOTg0MzgtMTkuMTAxNTYyLTguNS04LjMwMDc4MS0xNS0xOC4zMDA3ODEtMTkuMTAxNTYyLTI5LjM5ODQzOC0zLjUtOS03LjY5OTIxOS0yMi42MDE1NjItOC43OTY4NzYtNDcuNS0xLjIwMzEyNC0yNy0xLjUtMzUuMTAxNTYyLTEuNS0xMDMuNDAyMzQzcy4yOTY4NzYtNzYuNSAxLjUtMTAzLjM5ODQzOGMxLjA5NzY1Ny0yNSA1LjI5Njg3Ni0zOC41IDguNzk2ODc2LTQ3LjUgNC4xMDE1NjItMTEuMTAxNTYyIDEwLjYwMTU2Mi0yMS4xOTkyMTkgMTkuMjAzMTI0LTI5LjQwMjM0MyA4LjI5Njg3Ni04LjUgMTguMjk2ODc2LTE1IDI5LjM5ODQzOC0xOS4wOTc2NTcgOS0zLjUgMjIuNjAxNTYyLTcuNjk5MjE5IDQ3LjUtOC44MDA3ODEgMjctMS4xOTkyMTkgMzUuMTAxNTYyLTEuNSAxMDMuMzk4NDM4LTEuNSA2OC40MDIzNDMgMCA3Ni41LjMwMDc4MSAxMDMuNDAyMzQzIDEuNSAyNSAxLjEwMTU2MiAzOC41IDUuMzAwNzgxIDQ3LjUgOC44MDA3ODEgMTEuMDk3NjU3IDQuMDk3NjU3IDIxLjE5OTIxOSAxMC41OTc2NTcgMjkuMzk4NDM4IDE5LjA5NzY1NyA4LjUgOC4zMDA3ODEgMTUgMTguMzAwNzgxIDE5LjEwMTU2MiAyOS40MDIzNDMgMy41IDkgNy42OTkyMTkgMjIuNTk3NjU3IDguODAwNzgxIDQ3LjUgMS4xOTkyMTkgMjcgMS41IDM1LjA5NzY1NyAxLjUgMTAzLjM5ODQzOHMtLjMwMDc4MSA3Ni4zMDA3ODEtMS41IDEwMy4zMDA3ODF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NDkyMTkgMTI0LjVjLTcyLjU5NzY1NyAwLTEzMS41IDU4Ljg5ODQzOC0xMzEuNSAxMzEuNXM1OC45MDIzNDMgMTMxLjUgMTMxLjUgMTMxLjVjNzIuNjAxNTYyIDAgMTMxLjUtNTguODk4NDM4IDEzMS41LTEzMS41cy01OC44OTg0MzgtMTMxLjUtMTMxLjUtMTMxLjV6bTAgMjE2LjgwMDc4MWMtNDcuMDk3NjU3IDAtODUuMzAwNzgxLTM4LjE5OTIxOS04NS4zMDA3ODEtODUuMzAwNzgxczM4LjIwMzEyNC04NS4zMDA3ODEgODUuMzAwNzgxLTg1LjMwMDc4MWM0Ny4xMDE1NjIgMCA4NS4zMDA3ODEgMzguMTk5MjE5IDg1LjMwMDc4MSA4NS4zMDA3ODFzLTM4LjE5OTIxOSA4NS4zMDA3ODEtODUuMzAwNzgxIDg1LjMwMDc4MXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDIzLjg1MTU2MiAxMTkuMzAwNzgxYzAgMTYuOTUzMTI1LTEzLjc0NjA5MyAzMC42OTkyMTktMzAuNzAzMTI0IDMwLjY5OTIxOS0xNi45NTMxMjYgMC0zMC42OTkyMTktMTMuNzQ2MDk0LTMwLjY5OTIxOS0zMC42OTkyMTkgMC0xNi45NTcwMzEgMTMuNzQ2MDkzLTMwLjY5OTIxOSAzMC42OTkyMTktMzAuNjk5MjE5IDE2Ljk1NzAzMSAwIDMwLjcwMzEyNCAxMy43NDIxODggMzAuNzAzMTI0IDMwLjY5OTIxOXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" alt="aaaaaaaaaaaaa" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMxMCAzMTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJYTUxJRF84MjJfIj4KCTxwYXRoIGlkPSJYTUxJRF84MjNfIiBkPSJNMjk3LjkxNyw2NC42NDVjLTExLjE5LTEzLjMwMi0zMS44NS0xOC43MjgtNzEuMzA2LTE4LjcyOEg4My4zODZjLTQwLjM1OSwwLTYxLjM2OSw1Ljc3Ni03Mi41MTcsMTkuOTM4ICAgQzAsNzkuNjYzLDAsMTAwLjAwOCwwLDEyOC4xNjZ2NTMuNjY5YzAsNTQuNTUxLDEyLjg5Niw4Mi4yNDgsODMuMzg2LDgyLjI0OGgxNDMuMjI2YzM0LjIxNiwwLDUzLjE3Ni00Ljc4OCw2NS40NDItMTYuNTI3ICAgQzMwNC42MzMsMjM1LjUxOCwzMTAsMjE1Ljg2MywzMTAsMTgxLjgzNXYtNTMuNjY5QzMxMCw5OC40NzEsMzA5LjE1OSw3OC4wMDYsMjk3LjkxNyw2NC42NDV6IE0xOTkuMDIxLDE2Mi40MWwtNjUuMDM4LDMzLjk5MSAgIGMtMS40NTQsMC43Ni0zLjA0NCwxLjEzNy00LjYzMiwxLjEzN2MtMS43OTgsMC0zLjU5Mi0wLjQ4NC01LjE4MS0xLjQ0NmMtMi45OTItMS44MTMtNC44MTktNS4wNTYtNC44MTktOC41NTR2LTY3Ljc2NCAgIGMwLTMuNDkyLDEuODIyLTYuNzMyLDQuODA4LTguNTQ2YzIuOTg3LTEuODE0LDYuNzAyLTEuOTM4LDkuODAxLTAuMzI4bDY1LjAzOCwzMy43NzJjMy4zMDksMS43MTgsNS4zODcsNS4xMzQsNS4zOTIsOC44NjEgICBDMjA0LjM5NCwxNTcuMjYzLDIwMi4zMjUsMTYwLjY4NCwxOTkuMDIxLDE2Mi40MXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" alt=""/>
                    </div>
                </div>

                <div className="row footer_links_row">
                    <div className="col col-sm-3">
                        <ul>
                            <li>About Men's Health</li>
                            <li>Advertise</li>
                            <li>Other Hearst Subscriptions</li>
                        </ul>
                    </div>

                    <div className="col col-sm-3">
                        <ul>
                            <li>Newsletter</li>
                            <li>Subscribe</li>
                            <li>Media Kit</li>
                        </ul>
                    </div>

                    <div className="col col-sm-3">
                        <ul>
                            <li>Customer Care</li>
                            <li>Give a Gift</li>
                        </ul>
                    </div>

                    <div className="col col-sm-3">
                        <ul>
                            <li>E-prints, Reprints</li>
                            <li>Manage Email </li>
                        </ul>
                    </div>
                </div>

                <div className="row footer_logo_row">
                        <img data-src="https://assets.hearstapps.com/sites/menshealth/assets/images/logos/network-logo.565bb17.png" class="footer-network-logo lazyloaded" alt="Hearst Men's and Enthusiast Media Group - A Part of Hearst Digital Media" src="https://assets.hearstapps.com/sites/menshealth/assets/images/logos/network-logo.565bb17.png"></img>
                </div>
                <div className="row footer_info_row">
                    <div className="col col-xs-12">
                        <p>A Part of Hearst Digital Media</p>
                        <p>Men's Health participates in various affiliate marketing programs, which means we may get paid commissions on editorially chosen products purchased through our links to retailer sites</p>
                        <p>©2021 Hearst Magazine Media, Inc. All Rights Reserved.</p>
                    </div>
                </div>

                <div className="row footer_links_row">
                    <div className="col col-xs-12">
                        <ul className="col-xs-12">
                            <li>Privacy Notice/Notice at Collection</li>
                            <li>Your California Privacy Rights</li>
                            <li>Interest-Based Ads</li>
                            <li>Terms of Use</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                </div>

                <button className="footer_btn"> Do not Sell My Personal Information</button>
            </div>
        </div>
    )
}


export default Footer