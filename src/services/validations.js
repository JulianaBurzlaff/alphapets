export function emailRequired(value) {
  if (!value) {
    return 'E-mail obrigatório';
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(value)) {
    return 'E-mail inválido';
  }
  return undefined;
}

export function passwordRequired(value) {
  if (!value) {
    return 'Senha obrigatória';
  }
  if (value.length < 4) {
    return 'A senha deve possuir ao menos quatro caracteres';
  }
  return undefined;
}

export function confirmPasswordRequired(value, password) {
  if (!value) {
    return 'Confirmação de senha obrigatória';
  }
  if (value !== password) {
    return 'As senhas informadas são diferentes';
  }
  return undefined;
}

export function nameRequired(value) {
  if (!value) {
    return 'Nome obrigatório';
  }
  return undefined;
}

export function typeRequired(value) {
  if (!value) {
    return 'Tipo obrigatório';
  }
  return undefined;
}

export function serviceRequired(value) {
  if (!value) {
    return 'Serviço obrigatório';
  }
  return undefined;
}

export function dateRequired(value) {
  if (!value) {
    return 'Data obrigatória';
  }
  return undefined;
}

export function timeRequired(value) {
  if (!value) {
    return 'Horário obrigatório';
  }
  return undefined;
}

export function codeRequired(value) {
  if (!value) {
    return 'Horário obrigatório';
  }
  return undefined;
}
