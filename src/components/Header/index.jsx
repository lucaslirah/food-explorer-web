import { PiReceipt, PiSignOut } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDishes } from "../../hooks/dishes";
import { Container, SignOut, MobileMenu } from "./styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";
import { USER_ROLE } from "../../utils/roles";
import foodExplorerLogo from "../../assets/logo-food-explorer.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const { fetchDishes } = useDishes();
  const navigation = useNavigate();
  const [search, setSearch] = useState("");

  // NOVO: Estado para controlar a visibilidade do menu mobile
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  function handleNewDish() {
    navigation("/dishes/create");
  }

  useEffect(() => {
    // Para evitar buscas em cada letra digitada no menu mobile,
    // podemos adicionar uma lógica de busca aqui depois, se necessário.
    fetchDishes(search);
  }, [search]);

  return (
    <Container>
      {/* ============================================ */}
      {/* ======== COMPONENTE DO MENU MOBILE ========= */}
      {/* ============================================ */}
      <MobileMenu $isOpen={menuIsOpen}>
        <header>
          <button onClick={() => setMenuIsOpen(false)}>
            <FiX size={24} />
          </button>
          <span>Menu</span>
        </header>

        <main>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Se o usuário for admin, pode ter um link para "Novo prato" aqui também */}
          {user.role === USER_ROLE.ADMIN && (
            <a href="#" onClick={handleNewDish}>
              Novo prato
            </a>
          )}

          <a href="#" onClick={handleSignOut}>
            Sair
          </a>
        </main>
      </MobileMenu>

      {/* ============================================ */}
      {/* ============ LAYOUT PRINCIPAL ============== */}
      {/* ============================================ */}

      {/* --- ITENS DO MOBILE --- */}
      <button
        className="mobile-only menu-button"
        onClick={() => setMenuIsOpen(true)}
      >
        <FiMenu size={28} />
      </button>

      {user.role === USER_ROLE.CUSTOMER && (
        <button className="mobile-only receipt-button">
          <PiReceipt size={28} />
          <span>0</span>
        </button>
      )}

      {/* --- ITENS QUE APARECEM EM AMBAS AS VERSÕES (ou controlados individualmente) --- */}
      <div className="food_explorer_logo">
        <img src={foodExplorerLogo} alt="Logo Food Explorer" />
        {user.role === USER_ROLE.ADMIN && <p>admin</p>}
      </div>

      {/* --- ITENS DO DESKTOP (AGORA INDIVIDUAIS) --- */}
      <Input
        className="desktop-only" // <--- CLASSE APLICADA AQUI
        placeholder="Busque por pratos ou ingredientes"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

      {user.role === USER_ROLE.CUSTOMER && (
        <Button
          className="desktop-only" // <--- CLASSE APLICADA AQUI
          title="Pedidos(n)"
          icon={PiReceipt}
        />
      )}

      {user.role === USER_ROLE.ADMIN && (
        <Button
          className="desktop-only" // <--- CLASSE APLICADA AQUI
          title="Novo prato"
          onClick={handleNewDish}
        />
      )}

      <SignOut className="desktop-only" onClick={handleSignOut}>
        {" "}
        {/* <--- CLASSE APLICADA AQUI */}
        <PiSignOut />
      </SignOut>
    </Container>
  );
}
