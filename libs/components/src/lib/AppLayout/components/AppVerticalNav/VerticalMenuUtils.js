import Link from "next/link";
import React from "react";
import { useIntl } from "react-intl";

const renderMenuItemChildren = (item) => {
  const {icon, messageId, path} = item;
  const {messages} = useIntl();

  if (path && path.includes('/'))
    return {
      key: item.id,
      icon:
        icon &&
        (React.isValidElement(icon) ? (
          <span className='ant-menu-item-icon'>{icon}</span>
        ) : (
          <icon className='ant-menu-item-icon' />
        )),
      label: (
        <Link href={path}>
          <span data-testid={messageId.toLowerCase + '-nav'}>
            {messages[messageId]}
          </span>
        </Link>
      ),
    };
  else {
    return {
      key: item.id,
      icon:
        icon &&
        (React.isValidElement(icon) ? (
          <span className='ant-menu-item-icon'>{icon}</span>
        ) : (
          <icon className='ant-menu-item-icon' />
        )),
      label: (
        <span data-testid={messageId.toLowerCase + '-nav'}>
          {messages[messageId]}
        </span>
      ),
    };
  }
};

const renderMenuItem = (item) => {
  return item.type === 'collapse'
    ? {
        key: item.id,
        ...renderMenuItemChildren(item),
        children: item.children.map((item) => renderMenuItem(item)),
        type: 'collapse',
      }
    : {
        key: item.id,
        ...renderMenuItemChildren(item),
      };
};

const renderMenu = (item) => {
  return item.type === 'group'
    ? {
        key: item.path ? item.path : item.id,
        ...renderMenuItemChildren(item),
        children: item.children.map((item) => renderMenuItem(item)),
        type: 'group',
      }
    : {
        key: item.id,
        exact: item.exact,
        ...renderMenuItemChildren(item),
      };
};

export const getRouteMenus = (routesConfig) => {
  return routesConfig.map((route) => renderMenu(route));
};
