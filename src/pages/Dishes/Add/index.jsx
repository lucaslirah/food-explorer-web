import { PiCaretLeft, PiUploadSimple } from "react-icons/pi";
import { Container, Form, Picture, Inputs } from "./styles";
import { ButtonText } from "../../../components/ButtonText";
import { Textarea } from "../../../components/Textarea";
import { DishItem } from "../../../components/DishItem";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { Select } from "../../../components/Select";
import { Input } from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../../services/api";

export function Add() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, SetPrice] = useState(0);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [pictureFile, setPictureFile] = useState(null);

  const navigate = useNavigate();

  function handleBack(){
    navigate("/");
  }

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }
  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }
  function handlePicture(event) {
    const file = event.target.files[0];
    setPictureFile(file);
  }

  async function handleNewDish() {
    if (!name || !description || !type || !price || ingredients.length == 0 || !pictureFile) {
      return alert("Há campos vazios a serem preenchidos!");
    }

    if (newIngredient) {
      return alert(
        "Você esqueceu de adicionar um ingrediente, clique em adicionar ou deixe o campo vazio."
      );
    }

    const data = new FormData();

    data.append("picture", pictureFile);
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    data.append("type", type);
    data.append("ingredients", ingredients);

    try {
      await api.post("/dishes/create", data, {
        headers: {
          "Content-type": `multipart/form-data`,
        },
      });
    } catch (error) {
      alert(error);
    }

    alert("Novo prato criado!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <Form>
          <ButtonText 
            Icon={PiCaretLeft} 
            title="voltar" 
            onClick={handleBack}
          />

        <h1>Adicionar prato</h1>

        <Inputs>
          <div className="inputs_wrapper">
            <Picture className="item_1">
              <label htmlFor="dish_picture">
                <span>Imagem do prato</span>
                <Input
                  title="Selecione a imagem"
                  id="dish_picture"
                  type="file"
                  icon={PiUploadSimple}
                  onChange={handlePicture}
                />
              </label>
            </Picture>
            <div className="item_2">
              <label htmlFor="dish_name">
                <span>Nome</span>
                <Input
                  id="dish_name"
                  placeholder="Ex: Salada Ceaser"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="item_3">
              <label htmlFor="dish_type">
                <span>Categoria</span>
                <Select
                  id="dish_type"
                  name="dish_type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="meal">Refeição</option>
                  <option value="dessert">Sobremesa</option>
                  <option value="drink">Bebida</option>
                </Select>
              </label>
            </div>
          </div>

          <div className="inputs_wrapper">
            <div className="item_4">
              <label>
                <span>Ingredientes</span>
                <div className="ingredients">
                  {ingredients.map((ingredient, index) => (
                    <DishItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <DishItem
                    placeholder="Adicionar"
                    $isNew
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />
                </div>
              </label>
            </div>

            <div className="item_5">
              <label htmlFor="dish_price">
                <span>Preço</span>
                <Input
                  id="dish_price"
                  type="number"
                  placeholder="R$ 00,00"
                  onChange={(e) => SetPrice(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="item_6">
            <label htmlFor="dish_description">
              <span>Descrição</span>
              <Textarea
                id="dish_description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
        </Inputs>

        <Button title="Salvar alterações" onClick={handleNewDish} />
      </Form>

      <Footer />
    </Container>
  );
}
