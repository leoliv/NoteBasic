let t = document.getElementById('caixa');

function negrito() {
  if (t.style.fontWeight == 'bold') {
    t.style.fontWeight = 'normal';
    console.log('Bold');
  } else {
    t.style.fontWeight = 'bold';
  }
}

function italico() {
  if (t.style.fontStyle == 'italic') {
    t.style.fontStyle = 'normal';
  } else {
    t.style.fontStyle = 'italic';
  }
}

function sublinhado() {
  if (t.style.textDecoration == 'underline') {
    t.style.textDecoration = 'none';
  } else {
    t.style.textDecoration = 'underline';
  }
}

function maiusculo() {
  t.style.textTransform = 'uppercase';
}

function menusculo() {
  t.style.textTransform = 'lowercase';
}

