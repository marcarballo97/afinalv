
function MenuP() {
    return (


        <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

            <div className="w-fit">
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiChartPie}
                            >
                                Inicio
                            </Sidebar.Item>
                            <Sidebar.Collapse
                                icon={HiShoppingBag}
                                label="Grado"
                            >
                                <Sidebar.Item href="#">
                                    7
                                </Sidebar.Item>
                                <Sidebar.Item href="#">
                                    8
                                </Sidebar.Item>
                                <Sidebar.Item href="#">
                                    9
                                </Sidebar.Item>
                                <Sidebar.Item href="#">
                                    1bto
                                </Sidebar.Item>
                                <Sidebar.Item href="#">
                                    2bto
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item
                                href="#"
                                icon={HiInbox}
                            >
                                perfil
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiUser}
                            >
                                configuración
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiShoppingBag}
                            >
                                ¿?
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiTable}
                            >
                                Cerrar sesión
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </aside>



    )
}

export default MenuP;