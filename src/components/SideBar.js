import "../styles/components/SideBar.css";

export default function SideBar() {
    return (
        <div>
            <div class="sidenav">
                <a href="dashboard">
                    <i class="mdi mdi-home"> </i> <span> Dashboard </span>
                </a>
                <a href="agenda">
                    <i class="mdi mdi-calendar"> </i> <span> Agenda </span>
                </a>
                <a href="todo">
                    <i class="mdi mdi-format-list-checks"> </i> <span>To Do</span>
                </a>
                <a href="food">
                    <i class="mdi mdi-noodles"> </i> <span> Food</span>
                </a>
                <a href="finances">
                    <i class="mdi mdi-finance"> </i> <span> Finances</span>
                </a>
                <a href="exercises">
                    <i class="mdi mdi-dumbbell"> </i> <span> Exercise </span>
                </a>
                <a href="notebook">
                    <i class="mdi mdi-notebook"> </i> <span> Notebook </span>
                </a>
                <a href="logout">
                    <i class="mdi mdi-logout"> </i> <span> Logout </span>
                </a>
            </div>
        </div>
    );
}
