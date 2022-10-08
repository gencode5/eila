"hola-440.blogspot.com".includes(location.host)
  ? null
  : ()=>{
    (document.body.innerHTML = `<h1 style='color:red'>عذرا أنت تستخدم نسخة غير مرخصة</h1>
<p>الرجاء كل الرجاء عدم استخدام النسخ غير المرخصة تقديرا واحتراما لمجهودنا المبذول في تطوير القالب</p>
<p>ان كنت غير قادر على شراء النسخة المدفوعة تتوفر نسخة مجانية من القالب يمكنك استخدامها مجانا</p>
<p>في حال كنت اشتريت القالب وظهرت لك هذه الرسالة الرجاء عدم التعديل على اكواد القالب دون علم ويمكنك التواصل معنا لاي استفسار (للتواصل من خلال المنصة التي قمت بشراء القالب منها)</p>
`);
document.body.style =" margin: 0 !important; padding: 3% !important; display: flex !important; flex-direction: column !important; gap: 15px !important;text-align:center!important";
  };
vali = true;
