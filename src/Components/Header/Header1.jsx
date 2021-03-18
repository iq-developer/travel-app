import React, { useState } from "react";
import s from "./Header.module1.css";
import { Input } from "antd";
import cn from "classnames";
import { NavLink } from "react-router-dom";

import { Select } from "antd";
import { languageFunc } from "../../common/functions/functions";

import loginImg from "../../assets/login.png"

const { Option } = Select;

const Header = ({
  lang,
  isAuthenticated,
  editLang,
  inputValue,
  logout,
  name,
  i18n,
  editArr,
  location,
  editInputValue,
  IsSuccess,
  t,
}) => {
  const { Search } = Input;

  const [visable, setVisable] = useState(false);
  window.onscroll = () => {
    let scrollTop = document.body.parentElement.scrollTop;
    scrollTop > 390 ? setVisable(true) : setVisable(false);
  };

  const onSearch = () => window.scrollTo(0, 391);

  function handleChange(value) {
    editLang(value);
  }

  return (
    <nav>

      <div className="nav-left">
        <NavLink className={cn(s.logo, s.float)} to={"/"}>
          Travel
        </NavLink>
      </div>

      <div className="nav-right">

        <div className="language">

          <a href="#" className="float p20"><img src="img/login.png" alt="login" width="40px" height="40px" ></a>



          <div>{name}</div>

          <Select
            defaultValue={lang}
            style={{ width: 60 }}
            onChange={handleChange}
          >
            <Option value="Русский">RU</Option>
            <Option value="English">EN</Option>
            <Option value="Deutsche">DE</Option>
          </Select>

          </div>
      </div>
    </nav>


    <div
      className={cn(
        s.header,
        { [s.visable]: !!visable && location.pathname === "/" },
        { [s.unvisable]: !visable && location.pathname === "/" }
      )}
    >
      <div className="nav-left">
        <NavLink className={s.logo} to={"/"}>
          Travel
        </NavLink>
      </div>

      <div>{name}</div>
      <div className={s.selected}>
        <Select
          defaultValue={lang}
          style={{ width: 60 }}
          onChange={handleChange}
        >
          <Option value="Русский">RU</Option>
          <Option value="English">EN</Option>
          <Option value="Deutsche">DE</Option>
        </Select>
      </div>

      {location.pathname === "/" && (
        <div>
          {!!visable && (
            <Search
              style={{ width: 120 }}
              className={s.inp}
              value={inputValue}
              autoFocus={true}
              onSearch={onSearch}
              onChange={(e) => {
                editInputValue(e.currentTarget.value);
              }}
              placeholder={languageFunc(
                lang,
                "Введите город или страну",
                "Enter city or country ",
                "Stadt oder Land eingeben "
              )}
              allowClear
            />
          )}
        </div>
      )}

      <div>
        {!isAuthenticated && location.pathname !== "/login" && (
          <NavLink to={"/login"}>
            {languageFunc(lang, "Авторизироваться", "Sign", "Anmeldung ")}
          </NavLink>
        )}
      </div>

      {!!isAuthenticated && (
        <div
          onClick={() => {
            IsSuccess(null);
            logout();
          }}
        >
          {languageFunc(lang, "Выйти", "Sign Out", "Hinausgehen")}
        </div>
      )}

    </div>
  );
};

export default Header;
